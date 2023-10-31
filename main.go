package main

import (
	"cryptomania/templates"
	"fmt"
	"html/template"
	"net/http"

	"github.com/0-mqix/melt"
	"github.com/go-chi/chi/v5"
)

// https://github.com/boj/redistore

//go:generate go run generate.go

var (
	root   *melt.Root
	wallet = map[string]float64{"bitcoin": 0.00704690, "chainlink": 2.33295218}
)

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

	templates.Load(m, templates.GlobalHandlers{})
	root = m.MustGetRoot("./templates/root.html")

	r := chi.NewRouter()

	r.Get("/", indexPage)
	r.Get("/login", loginPage)

	r.Get("/overview/{coin}", coinOverview)
	r.Get("/list/{coin}", coinListItem)

	r.Post("/user/login", login)

	r.Group(func(r chi.Router) {
		r.Post("/user/{action}/{coin}", coinAction)
	})

	r.Get("/reload_event", m.ReloadEventHandler)
	r.Post("/reload_event", func(w http.ResponseWriter, r *http.Request) { m.SendReloadEvent() })

	r.Get("/style.css", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/css")
		w.Write([]byte(m.Styles))
	})

	r.Get("/client.js", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./client/build/client.js")
	})

	fmt.Println("[HTTP]", http.ListenAndServe(":3000", r))
}
