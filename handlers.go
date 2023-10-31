package main

import (
	"bytes"
	"cryptomania/templates"
	"fmt"
	"io"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func indexPage(w http.ResponseWriter, r *http.Request) {
	assets, err := GetAssets()

	for _, a := range assets {
		a.Balance = wallet[a.Id]
	}

	if err != nil {
		w.WriteHeader(500)
		return
	}

	data := templates.IndexData{Balance: 1000, Swap: false, Assets: assets, Wallet: wallet}

	if r.Header.Get("Hx-Boosted") == "true" {
		templates.WriteIndex(w, r, data)
		return
	}

	root.Write(w, nil, func(w io.Writer) {
		templates.WriteIndex(w, r, data)
	})
}

func loginPage(w http.ResponseWriter, r *http.Request) {

	if r.Header.Get("Hx-Boosted") == "true" {
		templates.WriteLogin(w, r, templates.LoginData{})
		return
	}

	root.Write(w, nil, func(w io.Writer) {
		templates.WriteLogin(w, r, templates.LoginData{})
	})
}

func login(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	if r.Form.Get("password") != "good" {
		w.Write([]byte("<div id=\"login-error\">error: monkey</div>"))
		return
	}

	w.Header().Add("Hx-Redirect", "/")
}

func coinAction(w http.ResponseWriter, r *http.Request) {

	coin := chi.URLParam(r, "coin")
	action := chi.URLParam(r, "action")

	if action != "buy" && action != "sell" {
		w.WriteHeader(400)
		return
	}

	body, _ := io.ReadAll(r.Body)

	fmt.Println(action, string(body))

	asset, err := GetAsset(coin)

	if err != nil {
		fmt.Println(err)
		w.WriteHeader(500)
		return
	}

	asset.Balance = wallet[asset.Id]

	buffer := bytes.NewBuffer([]byte{})

	templates.WriteComponentsOverview(buffer, r, templates.ComponentsOverviewData{
		Coin:  coin,
		Asset: asset,
	})

	templates.WriteComponentsHeader(buffer, r, templates.ComponentsHeaderData{
		Balance: 2000,
		Swap:    true,
	})

	w.Write(buffer.Bytes())
}

func coinOverview(w http.ResponseWriter, r *http.Request) {
	coin := chi.URLParam(r, "coin")
	asset, err := GetAsset(coin)

	if err != nil {
		fmt.Println(err)
		w.WriteHeader(500)
		return
	}

	asset.Balance = wallet[asset.Id]

	templates.WriteComponentsOverview(w, r, templates.ComponentsOverviewData{
		Coin:  coin,
		Asset: asset,
	})
}
func coinListItem(w http.ResponseWriter, r *http.Request) {
	coin := chi.URLParam(r, "coin")
	asset, err := GetAsset(coin)

	if err != nil {
		fmt.Println(err)
		w.WriteHeader(500)
		return
	}

	asset.Balance = wallet[asset.Id]
	templates.Index.WriteTemplate(w, "asset", asset)
}
