package main

import (
	"bytes"
	"cryptomania/templates"
	"database/sql"
	"errors"
	"fmt"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"github.com/jmoiron/sqlx"
)

var (
	ErrorServer = errors.New("server error")
)

// loads all balances into a personalized assets array
func loadBalances(userId int, cachedAssets []*Asset) ([]*Asset, float64, error) {

	//clone assets so the modification to the array is not global
	assets := make([]*Asset, len(cachedAssets))
	copy(assets, cachedAssets)

	balances := make(map[string]float64)
	rows, err := database.Query("select coin, balance from Balances where user_id = ?;", userId)

	if rows.Err() == sql.ErrNoRows {
		return assets, 0, nil
	}

	if err != nil {
		return assets, 0, err
	}

	var coin string
	var balance float64
	var total float64

	// put balances in a map id => balance
	// bitcoin => 0.1
	for rows.Next() {
		rows.Scan(&coin, &balance)
		balances[coin] = balance
	}

	for i, asset := range assets {
		balance, ok := balances[asset.Id]

		if !ok {
			continue
		}

		price, _ := strconv.ParseFloat(asset.PriceUsd, 64)

		// i dont want to modify the global asset i want to add the user data
		// so i copy it by derefencing it and changing the values and then set the pointer to the clone
		clone := *asset
		clone.Balance = balance
		clone.Value = balance * price

		total += clone.Value
		assets[i] = &clone
	}

	return assets, total, err
}

// load balance for a single asset
func loadBalance(userId int, cachedAsset Asset) (*Asset, error) {
	result := database.QueryRow("select balance from Balances where user_id = ? and coin = ?;", userId, cachedAsset.Id)
	err := result.Err()

	if err != sql.ErrNoRows && err != nil {
		fmt.Println("[LOAD BALANCE] [ERROR]", err)
	}

	if err != nil {
		return &cachedAsset, err
	}

	var balance float64
	result.Scan(&balance)

	cachedAsset.Balance = balance

	price, _ := strconv.ParseFloat(cachedAsset.PriceUsd, 64)
	cachedAsset.Value = balance * price

	return &cachedAsset, nil
}

// sql tansaction to execute a buy or sell safely
func transaction(database *sqlx.DB, userId int, coin string, amount float64, sell bool) (float64, error) {

	if amount <= 0 {
		return 0, fmt.Errorf("amount cant be negative")
	}

	// begin transaction
	tx, err := database.Beginx()
	if err != nil {
		return 0, err
	}

	// if i return roll back the transaction unless if i call tx.Commit()
	defer tx.Rollback()

	var currentBalance float64

	// creates a localized loggin function for errors
	transactionError := func(err error) {
		fmt.Printf("[TRANSACTION] [ERROR] user: %d balance: %s amount: %s error: %v\n",
			userId, formatFloat(currentBalance), formatFloat(amount), err,
		)
	}

	// get balance
	err = tx.Get(&currentBalance, "select balance from Balances where user_id = ? and coin = ?", userId, coin)

	// if asset is not set create asset with amount
	if err == sql.ErrNoRows {
		_, err := tx.Exec("insert into Balances (coin, user_id, balance) values (?, ?, ?)", coin, userId, amount)

		if err != nil {
			transactionError(err)
			return currentBalance, ErrorServer
		}

		err = tx.Commit()

		if err != nil {
			transactionError(err)
			return currentBalance, ErrorServer
		}

		return currentBalance, nil

	} else if err != nil {
		transactionError(err)
		return currentBalance, ErrorServer
	}

	if sell {
		if currentBalance < amount {
			return 0, fmt.Errorf("insufficient balance to sell")
		}

		currentBalance -= amount
	} else {
		currentBalance += amount
	}

	// updates existing balance with new balance
	_, err = tx.Exec("update Balances set balance = ? where user_id = ? and coin = ?", currentBalance, userId, coin)

	if err != nil {
		return 0, ErrorServer
	}

	err = tx.Commit()

	if err != nil {
		transactionError(err)
		return currentBalance, ErrorServer
	}

	return currentBalance, nil
}

func coinAction(w http.ResponseWriter, r *http.Request) {
	coin := chi.URLParam(r, "coin")
	action := chi.URLParam(r, "action")

	if action != "buy" && action != "sell" {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	userId := sessions.GetInt(r.Context(), "id")
	if userId == 0 {
		w.Header().Add("Hx-Location", "/login")
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	asset, _ := GetAsset(coin)
	if asset == nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	err := r.ParseForm()
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	amount, _ := strconv.ParseFloat(r.Form.Get("amount"), 64)
	if amount == 0 {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// execute transaction
	balance, err := transaction(database, userId, coin, amount, action == "sell")

	if err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	price, _ := strconv.ParseFloat(asset.PriceUsd, 64)

	// i dont want to change the global asset so i clone it by derefencing it
	clone := *asset
	clone.Balance = balance
	clone.Value = balance * price
	clone.ActionAmount = amount

	if action == "sell" {
		clone.Sold = true
	}

	if action == "buy" {
		clone.Bought = true
	}

	// creates a new buffer so i can write multiple components to in one request as seperate components for hx-swap-oob
	// hx-swap-oob: https://htmx.org/attributes/hx-swap-oob/

	buffer := bytes.NewBuffer([]byte{})
	templates.ComponentsOverview.Write(buffer, r, &clone)

	var value float64

	if assets, _ := GetAssets(); assets != nil {
		_, value, _ = loadBalances(userId, assets)
		//the value of all balances changed so it needs to be updated in the session because its useless to query it each time
		sessions.Put(r.Context(), "total_value", value)
	}

	templates.WriteComponentsHeader(buffer, r, templates.ComponentsHeaderData{
		Username: sessions.GetString(r.Context(), "username"),
		Balance:  value,
		Swap:     true,
	})

	w.Write(buffer.Bytes())
}
