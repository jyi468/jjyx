import React, { Component } from 'react';
import Charts from '../Charts/Charts';

class CurrencyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.match.params.name,
            chartData: {}
        };
    }

    componentDidMount() {
        const stateName = this.state.name.toLowerCase();
        fetch('https://graphs2.coinmarketcap.com/currencies/' + stateName, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((currencyJson) => this.setState({chartData: currencyJson}));
    }

    render() {
        return (
            <Charts data={this.state.chartData} name={this.state.name}/>
        );
    }
}

export default CurrencyPage;