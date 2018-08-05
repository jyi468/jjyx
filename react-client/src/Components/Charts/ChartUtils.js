import Highcharts from "highcharts/highstock";

class ChartUtils {
    static createSeriesOptions(json, currencyName) {
        return Object.keys(json).reduce((accumulator, key) => {
            if (currencyName !== 'bitcoin' || (currencyName === 'bitcoin' && name !== 'Price (BTC)')) {
                let yData = {
                    data: json[key]
                };

                let name;

                switch (key) {
                    case "market_cap_by_available_supply":
                        name = "Market Cap";
                        break;
                    case "price_btc":
                        name = "Price (BTC)";
                        break;
                    case "price_usd":
                        name = "Price (USD)";
                        break;
                    case "volume_usd":
                        name = "24h Vol";
                        break;
                    default:
                        name = key;
                        break;
                }

                yData.name = name;

                accumulator.push(yData);
            }

            return accumulator;

        }, []);
    }

    static createChart(seriesOptions) {
        Highcharts.stockChart('container', {

            rangeSelector: {
                selected: 4,
                buttons: [{
                    type: 'changeScale',
                    events: {
                        click: function () {
                            $('#container').highcharts().yAxis[0].update({ type: 'logarithmic'})
                        }
                    }
                }]
            },

            yAxis: [{
                title: {
                    text: "Price (USD)"
                },
                labels: {
                    formatter: function () {
                        return (this.value > 0 ? ' + ' : '') + this.value;
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'
                }]
            }],

            plotOptions: {
                series: {
                    compare: 'percent',
                    showInNavigator: true,
                    enableMouseTracking: true,
                    followPointer: true,
                    stickyTracking: true
                },
                line: {
                    enableMouseTracking: true,
                    followPointer: true,
                    stickyTracking: true
                }
            },

            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2,
                shared: false,
                split: true
            },

            series: seriesOptions
        });
    }
}

export default ChartUtils;