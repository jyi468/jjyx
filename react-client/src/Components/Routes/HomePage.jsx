import React, { Component } from 'react';
import Grid from "../Grid/Grid";
import NavBar from "../Header/NavBar"

class HomePage extends Component {
    constructor(props) {
        super(props);
        // TODO: Create nested models here with main grid, pagination, tabs, etc.
        this.state = {
            pageNumber: 1,
            maxPage: 17,
            coins: []
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
                    let coins = createCoins(response);

                    this.setState({
                        coins: coins,
                    });
                },
                // Failure
                (reason) => { console.log(reason) });
    }

    // TODO: Pass in gridData, pageData or use nested model?
    render() {
        return (
            <div className="container main-section">
                <NavBar />
                <Grid data={this.state.coins} pageNumber={this.state.pageNumber}/>
            </div>
        )
    }
}

// TODO: Create Modules/Service utilities with below functions
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
function createCoins(response) {
    // Change to array first
    let coins = Object.keys(response.data).map(function (key) {
        return response.data[key];
    });

    // Sort array by rank of Coin
    coins.sort(compareCoins);

    return coins;
}
export default HomePage;