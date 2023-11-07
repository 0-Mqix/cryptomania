package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strconv"
	"sync"
	"time"
)

const (
	CONVERSION_API_ENDPOINT = "https://api.coincap.io/v2/rates/euro"
	EXCHANGES_API_ENDPOINT  = "https://api.coincap.io/v2/exchanges"
	ASSETS_API_ENDPOINT     = "https://api.coincap.io/v2/assets"
	NEWS_API_ENDPOINT       = "https://newsapi.org/v2/everything?q=crypto+bitcoin+cryptocurrencies+blockchain"

	CACHE_DURATION_ASSETS = 30 * time.Second
	CACHE_DURATION_NEWS   = 1 * time.Hour
)

//all api data loaders are cached so i make as less api calls as possible
// mutexes in the _cache structs are to protect the data arrays from concurent read / writes

var (
	conversionRate float64

	assetsCache struct {
		sync.Mutex
		lastRequest time.Time
		array       []*Asset
		list        map[string]*Asset
	}

	exchangesCache struct {
		sync.Mutex
		lastRequest time.Time
		array       []*Exchange
	}

	newsCache struct {
		sync.Mutex
		lastRequest time.Time
		array       []*Article
	}
)

func loadConversionRate() (float64, error) {
	// cache is invalid, fetch new data
	client := &http.Client{}
	req, err := http.NewRequest("GET", CONVERSION_API_ENDPOINT, nil)
	if err != nil {
		fmt.Println("[LOAD CONVERSION RATE] [ERROR]", err)
		return 0, err
	}
	res, err := client.Do(req)
	if err != nil {
		fmt.Println("[LOAD CONVERSION RATE] [ERROR]", err)
		return 0, err
	}

	defer res.Body.Close()

	var data ConversionRateData
	err = json.NewDecoder(res.Body).Decode(&data)
	if err != nil {
		fmt.Println("[LOAD CONVERSION RATE] [ERROR]", err)
		return 0, err
	}

	conversionRate, err = strconv.ParseFloat(data.Data.RateUsd, 64)
	if err != nil {
		fmt.Println("[LOAD CONVERSION RATE] [ERROR]", err)
		return 0, err
	}

	return conversionRate, nil
}

func GetAssets() ([]*Asset, error) {
	assetsCache.Lock()
	defer assetsCache.Unlock()

	// check if cached data is still valid
	if time.Since(assetsCache.lastRequest) < CACHE_DURATION_ASSETS && assetsCache.array != nil {
		return assetsCache.array, nil
	}

	// cache is invalid, fetch new data
	client := &http.Client{}
	req, err := http.NewRequest("GET", ASSETS_API_ENDPOINT, nil)
	if err != nil {
		return nil, err
	}
	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	var data AssetsData
	err = json.NewDecoder(res.Body).Decode(&data)
	if err != nil {
		return nil, err
	}

	conversionRate, _ = loadConversionRate()

	// add euro values to assets
	for _, a := range data.Assets {
		price, _ := strconv.ParseFloat(a.PriceUsd, 64)
		a.PriceEuro = price / conversionRate
	}

	assetsCache.array = data.Assets
	assetsCache.lastRequest = time.Now()

	return data.Assets, nil
}

func GetAsset(coin string) (*Asset, error) {
	assetsCache.Lock()

	if time.Since(assetsCache.lastRequest) < CACHE_DURATION_ASSETS && assetsCache.list != nil {
		assetsCache.Unlock()
		return assetsCache.list[coin], nil
	}

	assetsCache.Unlock()
	assets, err := GetAssets()

	assetsCache.Lock()
	defer assetsCache.Unlock()

	if err != nil {
		return nil, err
	}

	if assetsCache.list == nil {
		assetsCache.list = make(map[string]*Asset)
	}

	// add the assets to a map for easy lookup
	for _, a := range assets {
		assetsCache.list[a.Id] = a
	}

	return assetsCache.list[coin], err
}

func getExchanges() ([]*Exchange, error) {
	exchangesCache.Lock()
	defer exchangesCache.Unlock()

	// check if cached data is still valid
	if time.Since(exchangesCache.lastRequest) < CACHE_DURATION_ASSETS && exchangesCache.array != nil {
		return exchangesCache.array, nil
	}

	// cache is invalid, fetch new data
	client := &http.Client{}
	req, err := http.NewRequest("GET", EXCHANGES_API_ENDPOINT, nil)
	if err != nil {
		return nil, err
	}
	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	var data ExchangesData
	err = json.NewDecoder(res.Body).Decode(&data)
	if err != nil {
		return nil, err
	}

	exchangesCache.array = data.Exchanges
	exchangesCache.lastRequest = time.Now()

	return data.Exchanges, nil
}

func getNews() ([]*Article, error) {
	newsCache.Lock()
	defer newsCache.Unlock()

	// check if cached data is still valid
	if time.Since(newsCache.lastRequest) < CACHE_DURATION_NEWS && newsCache.array != nil {
		return newsCache.array, nil
	}

	// cache is invalid, fetch new data
	client := &http.Client{}

	req, err := http.NewRequest("GET", NEWS_API_ENDPOINT, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Add("X-Api-Key", os.Getenv("NEWS_API_KEY"))

	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	var data NewsData
	err = json.NewDecoder(res.Body).Decode(&data)
	if err != nil {
		return nil, err
	}

	newsCache.array = data.Articles
	newsCache.lastRequest = time.Now()

	return data.Articles, nil
}
