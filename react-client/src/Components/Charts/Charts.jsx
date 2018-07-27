import React, {Component} from 'react';
import Highcharts from 'highcharts/highstock';
import Exporting from 'highcharts/modules/exporting';
//import { stockChart } from 'highcharts/highstock';

Exporting(Highcharts);

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        // Can't do below fetch due to CORS not being allowed from coinmarketcap
        /*const stateName = this.props.name.toLowerCase();
        fetch('https://graphs2.coinmarketcap.com/currencies/' + stateName, {
            method: 'GET'
        })*/
        fetch('/bitcoin.json', {
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((currencyJson) => {
                this.setState({data: currencyJson});
            });
    }

    render() {
        const currentData = this.state.data;
        if (Object.keys(currentData).length) {
            createChart(this.state.data);
        }
        return (<div id="container">{this.props.name}</div>)
    };

}

function createChart(chartData) {
    let seriesOptions = Object.keys(chartData).map((key) => {
        return {
            name: key,
            data: chartData[key]
        }
    });
    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 4
        },

        yAxis: {
            labels: {
                formatter: function () {
                    return (this.value > 0 ? ' + ' : '') + this.value + '%';
                }
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },

        plotOptions: {
            series: {
                compare: 'percent',
                showInNavigator: true
            }
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
            valueDecimals: 2,
            split: true
        },

        series: seriesOptions
    });
}

export default Charts;