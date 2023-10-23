package main

import (
	"cryptomania/templates"
	"fmt"
	"html/template"
	"io"
	"net/http"
	"strconv"
	"strings"

	"github.com/0-mqix/melt"
	"github.com/go-chi/chi/v5"
)

//go:generate go run generate.go

func formatFloatFunction(input any, number int) (string, error) {
	switch value := input.(type) {

	case float64, float32:
		return fmt.Sprintf(fmt.Sprintf("%%.%df", number), value), nil

	case string:
		v, err := strconv.ParseFloat(value, 64)

		if err != nil {
			return "", err
		}
		return fmt.Sprintf(fmt.Sprintf("%%.%df", number), v), nil

	default:
		return fmt.Sprint(value), nil
	}
}

func priceChange(input string) (template.HTML, error) {
	value, err := strconv.ParseFloat(input, 64)

	if err != nil {
		return template.HTML(""), err
	}

	var class string

	if value < 0 {
		class = "negative"
	} else if value > 0 {
		class = "positive"
	}

	return template.HTML(fmt.Sprintf("<span class=\"%s\"/>%.2f %%<span/>", class, value)), nil
}

func lowCase(s string) string {
	return strings.ToLower(s)
}

func calculateBalance(balance float64, priceString string) (string, error) {
	price, err := strconv.ParseFloat(priceString, 64)

	if err != nil {
		return "", err
	}

	return fmt.Sprintf("%.2f $", balance*price), err
}

func main() {
	m := melt.New(
		melt.WithWatcher("/reload_event", true, true, []string{".html", ".scss"}, "./templates"),
		melt.WithGeneration("./templates/templates.go"),
		melt.WithStyle(true, "melt", "./templates/styles/main.scss", ""),
		melt.WithComponentFuncMap(template.FuncMap{
			"format_float":      formatFloatFunction,
			"low_case":          lowCase,
			"price_change":      priceChange,
			"println":           fmt.Println,
			"calculate_balance": calculateBalance,
		}),
	)

	wallet := map[string]float64{"bitcoin": 0.13, "xrp": 43}

	templates.Load(m, templates.GlobalHandlers{})
	root := m.MustGetRoot("./templates/root.html")

	r := chi.NewRouter()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		assets, err := GetAssets()

		if err != nil {
			w.WriteHeader(500)
			return
		}

		data := templates.IndexData{Assets: assets, Wallet: wallet}

		root.Write(w, nil, func(w io.Writer) {
			templates.WriteIndex(w, r, data)
		})
	})

	r.Get("/reload_event", m.ReloadEventHandler)
	r.Post("/reload_event", func(w http.ResponseWriter, r *http.Request) { m.SendReloadEvent() })

	r.Get("/style.css", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/css")
		w.Write([]byte(m.Styles))
	})

	r.Get("/client.js", func(w http.ResponseWriter, r *http.Request) { http.ServeFile(w, r, "./client/build/client.js") })

	fmt.Println("[HTTP]", http.ListenAndServe(":3000", r))
}
