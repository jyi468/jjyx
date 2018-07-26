import React, { Component } from 'react';
import Row from './Row/Row';
import Pagination from './Pagination/Pagination';

class Grid extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        //let rows = this.props.data.map((coin) => (<Row data={coin} />));

        return (
            <div class="row">
                <div class="col-xs-12">
                    <div class="row">
                        <div class="col-xs-4 offset-md-8">
                            <Pagination pageNumber={this.props.pageNumber} maxPage={this.props.maxPage} />
                        </div>
                    </div>
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
                    <div class="row">
                        <div class="col-xs-4 offset-md-8">
                            <Pagination pageNumber={this.props.pageNumber} maxPage={this.props.maxPage} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Grid;

