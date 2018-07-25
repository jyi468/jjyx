import React, { Component } from 'react';
import Grid from "./Grid/Grid";
import NavBar from "./HeaderComponent/NavBar"

class HomePage extends Component {
    render() {
        return (
            <div className="container main-section">
                <NavBar />
                <Grid/>
            </div>
        )
    }
}
export default HomePage;