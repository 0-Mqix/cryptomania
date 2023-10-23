package main

import (
	"encoding/json"
	"fmt"
	"net/http"
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
}

type AssetsData struct {
	Assets    []Asset `json:"data"`
	Timestamp int64   `json:"timestamp"`
}

const ASSETS_API_ENDPOINT = "https://api.coincap.io/v2/assets"

func GetAssets() ([]Asset, error) {
	client := &http.Client{}
	req, err := http.NewRequest("GET", ASSETS_API_ENDPOINT, nil)

	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	defer res.Body.Close()

	var data AssetsData
	err = json.NewDecoder(res.Body).Decode(&data)

	if err != nil {
		return nil, err
	}

	return data.Assets, nil
}
