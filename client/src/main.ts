import "./style.css"
import Highcharts from "highcharts"
import htmx from "htmx.org"

//@ts-ignore
window.htmx = htmx


async function prices(coin: string) {
    return fetch(`https://api.coincap.io/v2/assets/bitcoin/history?interval=m15&start=${Date.now() -  604_800_000}&end=${Date.now()}`)
    .then(response => response.json())
    .then(data => {
        //@ts-ignore
        return data.data.map(item => {return [item.time, Number(item.priceUsd)]});
    })
}

window.addEventListener("DOMContentLoaded", async function() {
    //@ts-ignore

    const chart = Highcharts.chart("chart", {
        chart: {
            type: 'line',
            backgroundColor: "var(--background-color)",
            numberFormatter: function(x) {
                return x.toFixed(0);
            },
        },
        title: {
            text: 'bitcoin price chart',
            style: {
                color: "var(--color)"
            }
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
            data: await prices("bitcoin"),
            color: "var(--purple)"
        }],
    });
})

