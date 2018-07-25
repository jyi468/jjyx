import React, { Component } from 'react';
import Row from './Row/Row';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount() {

        // Get main grid data
        fetch("https://api.coinmarketcap.com/v2/ticker/", {
            method: "GET"
        })
            .then((response) => response.json())
            .then(
                // Success
                (response) => {
                    let rows = createRows(response);

                    this.setState({rows: rows});
                    console.log("state", this.state.rows)
                },
                // Failure
                (reason) => { console.log(reason) });
    }

    render() {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Price</th>
                        <th scope="col">Volume (24h)</th>
                        <th scope="col">Circulating Supply</th>
                        <th scope="col">Change (24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.rows}
                </tbody>
            </table>
        )
    }


}

/**
 * Compare coin ranks. The lowest rank is shown first in the list
 * @param coin1
 * @param coin2
 * @returns {number}
 */
function compareCoins(coin1, coin2) {
    if (coin1.rank < coin2.rank) {
        return -1;
    }

    if (coin1.rank > coin2.rank) {
        return 1;
    }

    return 0;
}

/**
 * We create Row objects from the object that is returned by the
 * CoinMarketCap API
 *
 * @param response
 * @returns {any[]}
 */
function createRows(response) {
    // Change to array first
    let coins = Object.keys(response.data).map(function (key) {
        return response.data[key];
    });

    // Sort array by rank of Coin
    coins.sort(compareCoins);

    // Create grid rows for body
    return coins.map((coin) => (<Row data={coin} />));
}

export default Grid;

