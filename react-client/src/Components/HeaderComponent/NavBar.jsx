import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">CoinMarketCap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarContent">
                    <li className="nav-item dropdown" id="marketCap">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Market Cap
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">All Cryptocurrencies</a>
                            <a className="dropdown-item" href="#">Coins Only</a>
                            <a className="dropdown-item" href="#">Tokens Only</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown" id="tradeVolume">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Market Cap
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        </div>
                    </li>

                    <li className="nav-item dropdown" id="trending">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Market Cap
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        </div>
                    </li>

                    <li className="nav-item dropdown" id="tools">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Market Cap
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        </div>
                    </li>
                </div>
            </nav>
        )
    }
}
export default NavBar;