import React, { Component } from 'react';
import Charts from '../Charts/Charts';
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
                <Charts name={this.state.name}/>
            </div>
        );
    }
}

export default CurrencyPage;