import React, { Component } from 'react';
import Charts from '../Charts/Charts';

class CurrencyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.match.params.name
        };
    }

    render() {
        return (
            <Charts name={this.state.name}/>
        );
    }
}

export default CurrencyPage;