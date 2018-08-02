import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartsContainer from '../Charts/ChartsContainer';
import NavBar from '../Header/NavBar';
import { fetchChart } from "../../Redux/actions";

class CurrencyPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchChart(this.props.match.params.name));
    }

    componentDidUpdate(prevProps, prevState) {
        const currentName = this.props.match.params.name;
        const prevName = prevState.props.match.params.name;
        if (currentName !== prevName) {
            this.props.dispatch(fetchChart(this.props.match.params.name));
        }
    }

    render() {
        return (
            <div class="container main-section">
                <NavBar />
                <div class="row">
                    <div class="col-lg-12">
                        <h1>{this.props.match.params.name}</h1>
                    </div>
                </div>
                <ChartsContainer name={this.props.match.params.name}/>
            </div>
        );
    }
}

export default connect()(CurrencyPage);