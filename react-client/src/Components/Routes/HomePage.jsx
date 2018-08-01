import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridContainer from "../Grid/GridContainer";
import NavBar from "../Header/NavBar"
import GridUtils from "../Grid/GridUtils";
import { fetchGrid } from "../../Redux/actions";

// Order: constructor(), static getDerivedStateFromProps(), render(), componentDidMount()
class HomePage extends Component {
    // Lifecycle methods
    constructor(props) {
        super(props);
        // TODO: Create nested models here with main grid, pagination, tabs, etc.
        /*this.state = {
            maxPage: 17,
            coins: []
        }*/
    }

    // TODO: Pass in gridData, pageData or use nested model?
    render() {
        /*const pageNumber = parseInt(this.props.match.params.pageNumber) || 1;
        return (
            <div className="container main-section">
                <NavBar />
                <Grid data={this.state.coins} pageNumber={pageNumber} maxPage={this.state.maxPage}/>
            </div>
        )*/
        return (
            <div className="container main-section">
                <NavBar />
                <GridContainer />
            </div>
        );
    }

    componentDidMount() {
        const pageNumber = parseInt(this.props.match.params.pageNumber) || 1;
        this.props.dispatch(fetchGrid(pageNumber, 100));
    }

    componentDidUpdate(prevProps, prevState) {
        const newPageNumber = this.props.match.params.pageNumber;
        if (newPageNumber !== prevProps.match.params.pageNumber) {
            this.props.dispatch(fetchGrid(newPageNumber, 100));
        }
    }

    // Other methods
    /*fetchData(pageNumber) {
        // Get main grid data
        fetch("https://api.coinmarketcap.com/v2/ticker/?start=" + (100 * (pageNumber - 1) + 1) +"&limit=100", {
            method: "GET"
        })
            .then((response) => response.json())
            .then(
                // Success
                (response) => {
                    // Replace with Redux


                    /!*let maxPage = Math.ceil(response.metadata.num_cryptocurrencies / 100);
                    let coins = GridUtils.createCoins(response);

                    // Replace with Redux
                    this.setState({
                        maxPage: maxPage,
                        coins: coins,
                    });*!/
                },
                // Failure
                (reason) => { console.log(reason) });
    }*/
}

// Map state to props that will be passed to presentational ocmponent
const mapStateToProps = state => {
    return {
        grid: state.grid
    };
};

export default connect(mapStateToProps)(HomePage);