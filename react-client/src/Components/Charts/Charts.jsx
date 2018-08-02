import React, {Component} from 'react';
import Highcharts from 'highcharts/highstock';
import Exporting from 'highcharts/modules/exporting';
import ChartUtils from './ChartUtils';

Exporting(Highcharts);

class Charts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentData = this.props.data;
        if ($('#container').length && !currentData.isFetching && Object.keys(currentData).length) {
            let seriesOptions = ChartUtils.createSeriesOptions(this.props.data, this.props.name);
            createChart(seriesOptions);
        }
        return (<div id="container">{this.props.name}</div>)
    };

}

function createChart(seriesOptions) {
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