package main

import (
	"encoding/json"
	"net/http"
	"sync"
	"time"
)

type Asset struct {
	Id                string `json:"id"`
	Rank              string `json:"rank"`
	Symbol            string `json:"symbol"`
	Name              string `json:"name"`
	Supply            string `json:"supply"`
	MaxSupply         string `json:"maxSupply"`
	MarketCapUsd      string `json:"marketCapUsd"`
	VolumeUsd24Hr     string `json:"volumeUsd24Hr"`
	PriceUsd          string `json:"priceUsd"`
	ChangePercent24Hr string `json:"changePercent24Hr"`
	Vwap24Hr          string `json:"vwap24Hr"`

	Balance float64
	Value   float64

	ActionAmount float64
	Bought       bool
	Sold         bool
}

type AssetsData struct {
	Assets    []*Asset `json:"data"`
	Timestamp int64    `json:"timestamp"`
}

type AssetData struct {
	Asset     *Asset `json:"data"`
	Timestamp int64  `json:"timestamp"`
}

const (
	ASSETS_API_ENDPOINT = "https://api.coincap.io/v2/assets"
	CACHE_DURATION      = 30 * time.Second
)

var (
	cache struct {
		sync.Mutex
		lastRequest time.Time
		array       []*Asset
		list        map[string]*Asset
	}
)

func GetAssets() ([]*Asset, error) {
	cache.Lock()
	defer cache.Unlock()

	// check if cached data is still valid
	if time.Since(cache.lastRequest) < CACHE_DURATION && cache.array != nil {
		return cache.array, nil
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

	// update cache
	cache.array = data.Assets
	cache.lastRequest = time.Now()

	return data.Assets, nil
}

func GetAsset(coin string) (*Asset, error) {
	cache.Lock()

	if time.Since(cache.lastRequest) < CACHE_DURATION && cache.list != nil {
		cache.Unlock()
		return cache.list[coin], nil
	}

	cache.Unlock()
	assets, err := GetAssets()

	cache.Lock()
	defer cache.Unlock()

	if err != nil {
		return nil, err
	}

	if cache.list == nil {
		cache.list = make(map[string]*Asset)
	}

	for _, a := range assets {
		cache.list[a.Id] = a
	}

	return cache.list[coin], err
}
