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
            ChartUtils.createChart(seriesOptions);
        }
        return (<div id="container">{this.props.name}</div>)
    };
}

export default Charts;