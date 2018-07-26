import React, { Component } from 'react';
import Grid from "../Grid/Grid";
import NavBar from "../Header/NavBar"
import { createCoins } from "../Grid/GridUtils";

// Order: constructor(), static getDerivedStateFromProps(), render(), componentDidMount()
class HomePage extends Component {
    // Lifecycle methods
    constructor(props) {
        super(props);
        // TODO: Create nested models here with main grid, pagination, tabs, etc.
        this.state = {
            maxPage: 17,
            coins: []
        }
    }

    // TODO: Pass in gridData, pageData or use nested model?
    render() {
        const pageNumber = parseInt(this.props.match.params.pageNumber) || 1;
        return (
            <div className="container main-section">
                <NavBar />
                <Grid data={this.state.coins} pageNumber={pageNumber} maxPage={this.state.maxPage}/>
            </div>
        )
    }

    componentDidMount() {
        const pageNumber = parseInt(this.props.match.params.pageNumber) || 1;
        this.fetchData(pageNumber);
    }

    componentDidUpdate(prevProps, prevState) {
        const newPageNumber = this.props.match.params.pageNumber;
        if (newPageNumber !== prevProps.match.params.pageNumber) {
            this.fetchData(newPageNumber);
        }
    }

    // Other methods
    fetchData(pageNumber) {
        // Get main grid data
        fetch("https://api.coinmarketcap.com/v2/ticker/?start=" + (100 * (pageNumber - 1) + 1) +"&limit=100", {
            method: "GET"
        })
            .then((response) => response.json())
            .then(
                // Success
                (response) => {
                    let maxPage = Math.ceil(response.metadata.num_cryptocurrencies / 100);
                    let coins = createCoins(response);

                    this.setState({
                        maxPage: maxPage,
                        coins: coins,
                    });
                },
                // Failure
                (reason) => { console.log(reason) });
    }
}

export default HomePage;