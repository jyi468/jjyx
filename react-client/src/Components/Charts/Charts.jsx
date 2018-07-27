import React, {Component} from 'react';

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // Can't do below fetch due to CORS not being allowed from coinmarketcap
        /*const stateName = this.props.name.toLowerCase();
        fetch('https://graphs2.coinmarketcap.com/currencies/' + stateName, {
            method: 'GET'
        })*/
        fetch('/react-client/resources/bitcoin.json')
            .then((response) => response.json())
            .then((currencyJson) => this.setState({chartData: currencyJson}));
    }

    render() {
        return (<div>{this.props.name}</div>)
    };

}

export default Charts;