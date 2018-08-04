import React from 'react';
import Row from './Row/Row';
import Pagination from './Pagination/Pagination';

const Grid = ({pageNumber, maxPage, data}) => (
    <div>
        { pageNumber > 1 ?
            <div className="page-header mt-5 mb-5">
                <h1>Top 100 Cryptocurrencies By Market Capitalization (page {pageNumber})</h1>
            </div> :
            <div className="page-header mt-5 mb-5">
                <h1>Top 100 Cryptocurrencies By Market Capitalization</h1>
            </div>
        }
        <div className="row">
            <div className="col-xs-4 offset-md-8">
                <Pagination pageNumber={pageNumber} maxPage={maxPage}/>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-12">
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
                        data.map((coin) => (
                            <Row data={coin}/>
                        ))
                    }

                    </tbody>
                </table>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-4 offset-md-8">
                <Pagination pageNumber={pageNumber} maxPage={maxPage}/>
            </div>
        </div>
    </div>
);

export default Grid;