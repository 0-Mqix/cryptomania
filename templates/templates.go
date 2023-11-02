// Code generated by melt; DO NOT EDIT.

package templates

import (
	"github.com/0-mqix/melt"
	"io"
	"net/http"
)

var (
	Index              *melt.Component
	Login              *melt.Component
	ComponentsOverview *melt.Component
	ComponentsHeader   *melt.Component
)

type GlobalHandlers struct {
}

func Load(furnace *melt.Furnace, handlers GlobalHandlers) {
	ComponentsHeader = furnace.MustGetComponent("templates/components/header.html")
	Index = furnace.MustGetComponent("templates/index.html")
	Login = furnace.MustGetComponent("templates/login.html")
	ComponentsOverview = furnace.MustGetComponent("templates/components/overview.html")

	globalHandlers := make(map[string]melt.GlobalHandler)

	furnace.SetGlobalHandlers(globalHandlers)
}

type IndexData struct {
	PriceUsd          any
	ChangePercent24Hr any
	Value             any
	Wallet            any
	Swap              any
	Balance           any
	Username          any
	Assets            any
}

// generated write function for component
//
//	path: "templates/index.html"
func WriteIndex(w io.Writer, r *http.Request, data IndexData, globalOptions ...melt.GlobalOption) error {
	return Index.Write(w, r, data, globalOptions...)
}

type IndexAssetData struct {
	Id      any
	Symbol  any
	Name    any
	Balance any
}

// generated write function for a template in a component
//
//	path: "templates/index.html"
//	template: "asset"
func WriteIndexAsset(w io.Writer, data IndexAssetData) error {
	return Index.WriteTemplate(w, "asset", data)
}

type LoginData struct {
	Register any
}

// generated write function for component
//
//	path: "templates/login.html"
func WriteLogin(w io.Writer, r *http.Request, data LoginData, globalOptions ...melt.GlobalOption) error {
	return Login.Write(w, r, data, globalOptions...)
}

type ComponentsOverviewData struct {
	ChangePercent24Hr any
	Symbol            any
	PriceUsd          any
	MarketCapUsd      any
	Balance           any
	Value             any
	Bought            any
	Name              any
	Supply            any
	Id                any
	VolumeUsd24Hr     any
	ActionAmount      any
	Sold              any
}

// generated write function for component
//
//	path: "templates/components/overview.html"
func WriteComponentsOverview(w io.Writer, r *http.Request, data ComponentsOverviewData, globalOptions ...melt.GlobalOption) error {
	return ComponentsOverview.Write(w, r, data, globalOptions...)
}

type ComponentsOverviewActionsData struct {
	Id       any
	PriceUsd any
	Symbol   any
	Balance  any
}

// generated write function for a template in a component
//
//	path: "templates/components/overview.html"
//	template: "actions"
func WriteComponentsOverviewActions(w io.Writer, data ComponentsOverviewActionsData) error {
	return ComponentsOverview.WriteTemplate(w, "actions", data)
}

type ComponentsHeaderData struct {
	Swap     any
	Balance  any
	Username any
}

// generated write function for component
//
//	path: "templates/components/header.html"
func WriteComponentsHeader(w io.Writer, r *http.Request, data ComponentsHeaderData, globalOptions ...melt.GlobalOption) error {
	return ComponentsHeader.Write(w, r, data, globalOptions...)
}
