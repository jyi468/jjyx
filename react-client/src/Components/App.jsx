import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './Routes/HomePage';
import CurrencyPage from './Routes/CurrencyPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/:pageNumber?" component={HomePage} />
                    <Route name="currency" exact path="/currencies/:name" component={CurrencyPage} />
                </div>
            </Router>
        )
    }
}
export default App;