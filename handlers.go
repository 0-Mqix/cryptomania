package main

import (
	"cryptomania/templates"
	"fmt"
	"io"
	"net/http"

	"github.com/0-mqix/melt"
	"github.com/go-chi/chi/v5"
)

// global handler so this function is called each time the Header component is rendered
func HeaderGlobalHandler(r *http.Request, arguments map[string]any) *templates.ComponentsHeaderData {
	id := sessions.GetInt(r.Context(), "id")

	swap, ok := arguments["swap"].(bool)
	if !ok {
		swap = false
	}

	if id == 0 {
		return &templates.ComponentsHeaderData{Username: "", Balance: 0.0, Swap: swap}
	}

	username := sessions.GetString(r.Context(), "username")

	value, ok := arguments["value"].(float64)

	if !ok {
		value = sessions.GetFloat(r.Context(), "total_value")
	}

	return &templates.ComponentsHeaderData{Username: username, Swap: swap, Balance: value}
}

func indexPage(w http.ResponseWriter, r *http.Request) {
	assets, err := GetAssets()

	if err != nil {
		fmt.Println("[INDEX PAGE] [ASSETS] [ERROR]", err)
		w.WriteHeader(500)
		return
	}

	id := sessions.GetInt(r.Context(), "id")
	var value float64

	if id != 0 {
		assets, value, _ = loadBalances(id, assets)
		sessions.Put(r.Context(), "total_value", value)
	}

	//arugments that are passed into global components for melt
	arguments := melt.GlobalArguments(map[string]any{"value": value})

	//data that is passed with into the template
	data := templates.IndexData{Balance: value, Assets: assets, Request: r}

	// if htmx then write without root
	if r.Header.Get("Hx-Request") == "true" {
		templates.WriteIndex(w, r, data, arguments)
		return
	}

	root.Write(w, nil, func(w io.Writer) {
		templates.WriteIndex(w, r, data, arguments)
	})
}

func exchangesPage(w http.ResponseWriter, r *http.Request) {
	exchanges, err := getExchanges()

	if err != nil {
		fmt.Println("[EXCHANGES PAGE] [ERROR]", err)
		w.WriteHeader(500)
		return
	}

	data := templates.ExchangesData{Exchanges: exchanges, Request: r}

	if r.Header.Get("Hx-Request") == "true" {
		templates.WriteExchanges(w, r, data)
		return
	}

	root.Write(w, nil, func(w io.Writer) {
		templates.WriteExchanges(w, r, data)
	})
}

func newsPage(w http.ResponseWriter, r *http.Request) {
	news, err := getNews()

	if err != nil {
		fmt.Println("[NEWS PAGE] [ERROR]", err)
		w.WriteHeader(500)
		return
	}

	data := templates.NewsData{News: news, Request: r}

	if r.Header.Get("Hx-Request") == "true" {
		templates.WriteNews(w, r, data)
		return
	}

	root.Write(w, nil, func(w io.Writer) {
		templates.WriteNews(w, r, data)
	})
}

func loginPage(register bool) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {

		if r.Header.Get("Hx-Request") == "true" {
			templates.WriteLogin(w, r, templates.LoginData{Register: register})
			return
		}

		root.Write(w, nil, func(w io.Writer) {
			templates.WriteLogin(w, r, templates.LoginData{Register: register})
		})
	}
}

func coinOverview(actionsOnly bool) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		coin := chi.URLParam(r, "coin")
		asset, err := GetAsset(coin)

		if id := sessions.GetInt(r.Context(), "id"); id != 0 {
			asset, _ = loadBalance(id, *asset)
		}

		if err != nil {
			fmt.Println(err)
			w.WriteHeader(500)
			return
		}

		if actionsOnly {
			templates.ComponentsOverview.WriteTemplate(w, "actions", asset)
			return
		}

		templates.ComponentsOverview.Write(w, r, asset)
	}
}

func coinListItem(w http.ResponseWriter, r *http.Request) {
	coin := chi.URLParam(r, "coin")
	asset, err := GetAsset(coin)

	if id := sessions.GetInt(r.Context(), "id"); id != 0 {
		asset, _ = loadBalance(id, *asset)
	}

	if err != nil {
		fmt.Println(err)
		w.WriteHeader(500)
		return
	}

	templates.Index.WriteTemplate(w, "asset", asset)
}
