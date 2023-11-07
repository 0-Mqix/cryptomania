package main

import "time"

// structs acting as a json binding to the api`s

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
	PriceEuro         float64
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

type ConversionRateData struct {
	Data struct {
		ID             string `json:"id"`
		Symbol         string `json:"symbol"`
		CurrencySymbol string `json:"currencySymbol"`
		Type           string `json:"type"`
		RateUsd        string `json:"rateUsd"`
	} `json:"data"`
	Timestamp int64 `json:"timestamp"`
}

type Exchange struct {
	Id                 string `json:"id"`
	Name               string `json:"name"`
	Rank               string `json:"rank"`
	PercentTotalVolume string `json:"percentTotalVolume"`
	VolumeUsd          string `json:"volumeUsd"`
	TradingPairs       string `json:"tradingPairs"`
	Socket             bool   `json:"socket"`
	ExchangeUrl        string `json:"exchangeUrl"`
	Updated            int64  `json:"updated"`
}

type ExchangesData struct {
	Exchanges []*Exchange `json:"data"`
	Timestamp int64       `json:"timestamp"`
}

type NewsData struct {
	Status       string     `json:"status"`
	TotalResults int        `json:"totalResults"`
	Articles     []*Article `json:"articles"`
}

type Article struct {
	Author      string    `json:"author"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Url         string    `json:"url"`
	UrlToImage  string    `json:"urlToImage"`
	PublishedAt time.Time `json:"publishedAt"`
	Content     string    `json:"content"`
	Source      struct {
		ID   *string `json:"id"`
		Name string  `json:"name"`
	} `json:"source"`
}
