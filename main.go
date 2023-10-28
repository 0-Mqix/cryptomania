package main

import (
	"cryptomania/templates"
	"fmt"
	"html/template"
	"io"
	"math"
	"net/http"
	"strconv"
	"strings"

	"github.com/0-mqix/melt"
	"github.com/go-chi/chi/v5"
)

//go:generate go run generate.go

func formatFloat(number float64) string {
	var str string
	if number >= 100 {
		str = fmt.Sprintf("%.0f", number)
	} else if number < 0.1 {
		decimals := strings.Split(strconv.FormatFloat(number, 'f', -1, 64), ".")[1]
		for i := 0; i < len(decimals); i++ {
			if decimals[i] == '0' {
				continue
			}
			str = fmt.Sprintf("%."+strconv.Itoa(i+3)+"f", number)
			break
		}
	} else {
		str = fmt.Sprintf("%.2f", number)
	}

	split := strings.Split(str, ".")
	runes := []rune(split[0])
	var result []rune

	for i := len(runes) - 1; i >= 0; i-- {
		result = append([]rune{runes[i]}, result...)
		if (len(runes)-1-i)%3 == 2 && i != 0 {
			result = append([]rune{'_'}, result...)
		}
	}

	if len(split) == 1 {
		return string(result)
	}

	return string(result) + "." + split[1]
}

func formatFloatFunction(input any) (string, error) {
	switch value := input.(type) {

	case float64, float32:
		return formatFloat(value.(float64)), nil

	case string:
		number, err := strconv.ParseFloat(value, 64)

		if err != nil {
			return "", err
		}
		return formatFloat(number), nil

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

	return template.HTML(fmt.Sprintf("<span class=\"%s\"/>%.2f %%<span/>", class, math.Abs(value))), nil
}

func lowCase(s string) string {
	return strings.ToLower(s)
}

func calculateBalance(balance float64, priceString string) (string, error) {
	price, err := strconv.ParseFloat(priceString, 64)

	if err != nil {
		return "", err
	}

	return formatFloat(balance*price) + " $", err
}

var funcs = template.FuncMap{
	"format_float":      formatFloatFunction,
	"low_case":          lowCase,
	"price_change":      priceChange,
	"println":           fmt.Println,
	"calculate_balance": calculateBalance,
}

func main() {
	m := melt.New(
		melt.WithWatcher("/reload_event", true, true, []string{".html", ".scss"}, "./templates"),
		melt.WithGeneration("./templates/templates.go"),
		melt.WithStyle(true, "melt", "./templates/styles/main.scss", ""),
		melt.WithComponentFuncMap(funcs),
	)

	wallet := map[string]float64{"bitcoin": 0.00704690, "chainlink": 2.33295218}

	templates.Load(m, templates.GlobalHandlers{})
	root := m.MustGetRoot("./templates/root.html")

	r := chi.NewRouter()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		assets, err := GetAssets()

		for _, a := range assets {
			a.Balance = wallet[a.Id]
		}

		if err != nil {
			w.WriteHeader(500)
			return
		}

		data := templates.IndexData{Assets: assets, Wallet: wallet}

		root.Write(w, nil, func(w io.Writer) {
			templates.WriteIndex(w, r, data)
		})
	})

	r.Get("/overview/{coin}", func(w http.ResponseWriter, r *http.Request) {
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
	})

	r.Get("/list/{coin}", func(w http.ResponseWriter, r *http.Request) {
		coin := chi.URLParam(r, "coin")
		asset, err := GetAsset(coin)

		if err != nil {
			fmt.Println(err)
			w.WriteHeader(500)
			return
		}

		asset.Balance = wallet[asset.Id]
		templates.Index.WriteTemplate(w, "asset", asset)
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
