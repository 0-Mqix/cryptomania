import Highcharts from "highcharts"
import htmx, { closest } from "htmx.org"

import QuantitySelector from "./QuantitySelector";
import { formatFloat } from "./helpers"

//@ts-ignore
window.htmx = htmx

//define custom elements
customElements.define('quantity-selector', QuantitySelector);

//@ts-ignore
window.snap_top = function (elt: any) {
    console.log(closest(elt, ".asset"))
}

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
            numberFormatter: formatFloat,
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

// hack to make htmx emit 'formdata' event
window.addEventListener('htmx:configRequest', (event: any) => {
  if (event.target instanceof HTMLFormElement) {
    
    const formData = new FormData(event.target); // this triggers a formdata event, which is handled by shoelace

    // add the form data as request parameters
    for (const pair of formData.entries()) {
      const name = pair[0];
      const value = pair[1];

      const parameters = event.detail.parameters;

      // for multivalued form fields, FormData.entries() may contain multiple entries with the same name
      if (parameters[name] == null) {
        parameters[name] = [value]; // single element array
      } else if (Array.isArray(parameters[name]) && !parameters[name].includes(value)) {
        parameters[name].push(value);
      }
    }
  }
});