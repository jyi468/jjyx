import React, { Component } from 'react';
import Row from './Row/Row';

class Grid extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        //let rows = this.props.data.map((coin) => (<Row data={coin} />));

        return (
            <div class="row">
                <div class="col-xs-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Price</th>
                            <th scope="col">Volume (24h)</th>
                            <th scope="col">Circulating Supply</th>
                            <th scope="col">Change (24h)</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                /*{rows}*/
                                this.props.data.map((coin) => (
                                    <Row data={coin} />
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }


}

export default Grid;

