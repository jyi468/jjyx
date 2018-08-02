import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridContainer from "../Grid/GridContainer";
import NavBar from "../Header/NavBar"
import { fetchGrid } from "../../Redux/actions";

// Order: constructor(), static getDerivedStateFromProps(), render(), componentDidMount()
class HomePage extends Component {
    // Lifecycle methods
    constructor(props) {
        super(props);
    }

    // TODO: Pass in gridData, pageData or use nested model?
    render() {
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
        const newPageNumber = parseInt(this.props.match.params.pageNumber) || 1;
        const prevPageNumber = parseInt(prevProps.match.params.pageNumber) || 1;
        if (newPageNumber !== prevPageNumber) {
            this.props.dispatch(fetchGrid(newPageNumber, 100));
        }
    }
}

// Map state to props that will be passed to presentational component
const mapStateToProps = state => {
    return {
        grid: state.grid
    };
};

export default connect(mapStateToProps)(HomePage);