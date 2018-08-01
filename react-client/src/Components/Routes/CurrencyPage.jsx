import React, { Component } from 'react';
import Charts from '../Charts/Charts';
import ChartsContainer from '../Charts/ChartsContainer';
import NavBar from '../Header/NavBar';

class CurrencyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.match.params.name
        };
    }

    render() {
        return (
            <div class="container main-section">
                <NavBar />
                <div class="row">
                    <div class="col-lg-12">
                        <h1>{this.state.name}</h1>
                    </div>
                </div>
                <Charts name={this.state.name}/>
            </div>
        );
    }
}

export default CurrencyPage;