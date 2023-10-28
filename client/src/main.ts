import Highcharts from "highcharts"
import htmx from "htmx.org"

import QuantitySelector from "./QuantitySelector";

//@ts-ignore
window.htmx = htmx

//define custom elements
customElements.define('quantity-selector', QuantitySelector);

async function prices(coin: string) {
    return fetch(`https://api.coincap.io/v2/assets/${coin}/history?interval=m15&start=${Date.now() -  604_800_000}&end=${Date.now()}`)
    .then(response => response.json())
    .then(data => {
        //@ts-ignore
        return data.data.map(item => {return [item.time, Number(item.priceUsd)]});
    })
}

//@ts-ignore
window.load_chart = async function (coin: string) {
    Highcharts.chart("chart-" + coin, {
        chart: {
            type: 'line',
            backgroundColor: "var(--background-color)",
            numberFormatter: function(x) {
                if (x >= 100) { return x.toFixed(0) }

                if (x < 0.1) {
                    const decimals = x.toString().split(".")[1]
                    
                    for (let i = 0; i < decimals.length; i++) {
                        if (decimals[i] == '0') {
                            continue
                        }
                        return x.toFixed(i+3)
                    }
                }

                return x.toFixed(2)
            }
        },
        title: {
            text: "",
        },  
        legend: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            lineColor: "var(--color)",
            labels: {
                style: {
                    color: "var(--color)"
                },
            },
            gridLineColor: "var(--color)",
            tickColor: "var(--color)",
        },
        yAxis: {
            title: {
                text: ""
            },
            labels: {
                style: {
                    color: "var(--color)"
                },
            },
            gridLineColor: "var(--color)",
            tickColor: "var(--color)",
        },
        //@ts-ignore
        series: [{
            type: 'line',
            name: '$',
            data: await prices(coin),
            color: "var(--purple)"
        }],
    });
};
