package main

import (
	"cryptomania/templates"
	"embed"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"

	"github.com/0-mqix/melt"
	"github.com/alexedwards/scs/v2"
	"github.com/go-chi/chi/v5"
	"github.com/jmoiron/sqlx"
	"github.com/joho/godotenv"
	"github.com/redis/go-redis/v9"

	_ "github.com/go-sql-driver/mysql"
)

//go:generate go run generate.go

//go:embed "melt.json"
//go:embed "client/build"
var build embed.FS

var (
	root     *melt.Root
	database *sqlx.DB
	sessions *scs.SessionManager
)

func main() {
	godotenv.Load()

	production := os.Getenv("PRODUCTION_MODE") == "1"

	if production {
		fmt.Println("[CRYPTOMANIA] starting in production mode...")
	} else {
		fmt.Println("[CRYPTOMANIA] starting in development mode...")
	}

	functions := template.FuncMap{
		"format_float": formatFloatFunction,
		"low_case":     lowCase,
		"price_change": priceChange,
		"println":      fmt.Println,
	}

	var m *melt.Furnace
	var err error

	if !production {
		m = melt.New(
			melt.WithOutput("./melt.json"),
			melt.WithWatcher("/reload_event", true, true, []string{".html", ".scss"}, "./templates"),
			melt.WithGeneration("./templates/templates.go"),
			melt.WithStyle(true, "melt", "./templates/styles/main.scss", ""),
			melt.WithComponentFuncMap(functions),
		)
	} else {
		build, _ := build.ReadFile("melt.json")
		m = melt.NewProduction(build, functions, nil)
	}

	templates.Load(m, templates.GlobalHandlers{})
	root = m.MustGetRoot("./templates/root.html")

	opt, _ := redis.ParseURL(os.Getenv("UPSTASH"))
	client := redis.NewClient(opt)

	database, err = sqlx.Connect("mysql", os.Getenv("PLANETSCALE"))
	if err != nil {
		log.Fatalln(err)
	}

	sessions = scs.New()
	sessions.Store = NewSessionStore(client)

	r := chi.NewRouter()

	if !production {
		r.Get("/reload_event", m.ReloadEventHandler)
		r.Post("/reload_event", func(w http.ResponseWriter, r *http.Request) { m.SendReloadEvent() })
	}

	if !production {
		r.Get("/client.js", func(w http.ResponseWriter, r *http.Request) {
			http.ServeFile(w, r, "./client/build/client.js")
		})
	} else {
		client, err := build.ReadFile("client/build/client.js")

		if err != nil {
			panic("[CRYPTOMANIA] client.js not found")
		}

		r.Get("/client.js", func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-Type", "application/javascript")
			w.Write(client)
		})
	}

	r.Get("/style.css", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/css")
		w.Write([]byte(m.Styles))
	})

	//endpoints with session
	r.With(sessions.LoadAndSave).Group(func(r chi.Router) {
		r.Get("/", indexPage)

		r.Get("/login", loginPage(false))
		r.Get("/register", loginPage(true))

		r.Get("/overview/{coin}/actions", coinOverview(true))
		r.Get("/overview/{coin}", coinOverview(false))

		r.Get("/list/{coin}", coinListItem)

		r.Post("/user/login", login)
		r.Post("/user/register", register)

		r.Get("/user/logout", logout)

		r.Group(func(r chi.Router) {
			r.Post("/user/{action}/{coin}", coinAction)
		})
	})

	fmt.Println("[HTTP]", http.ListenAndServe(":3000", r))
}
