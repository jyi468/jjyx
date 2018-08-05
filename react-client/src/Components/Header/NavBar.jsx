import React from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-background-color">
            <a class="navbar-brand" href="#">
                <span class="cmc-logo-full"></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav">
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
                            Trade Volume
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        </div>
                    </li>

                    <li className="nav-item dropdown" id="trending">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Trending
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        </div>
                    </li>

                    <li className="nav-item dropdown" id="tools">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tools
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;