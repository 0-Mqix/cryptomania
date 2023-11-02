package main

import (
	"cryptomania/templates"
	"fmt"
	"io"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func indexPage(w http.ResponseWriter, r *http.Request) {
	assets, err := GetAssets()

	if err != nil {
		fmt.Println("[INDEX PAGE] [ASSETS] [ERROR]", err)
		w.WriteHeader(500)
		return
	}

	username := sessions.GetString(r.Context(), "username")
	id := sessions.GetInt(r.Context(), "id")
	var value float64

	if id != 0 {
		assets, value, _ = loadBalances(id, assets)
		sessions.Put(r.Context(), "total_value", value)
	}

	data := templates.IndexData{Username: username, Balance: value, Swap: false, Assets: assets}

	if r.Header.Get("Hx-Request") == "true" {
		templates.WriteIndex(w, r, data)
		return
	}

	root.Write(w, nil, func(w io.Writer) {
		templates.WriteIndex(w, r, data)
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
