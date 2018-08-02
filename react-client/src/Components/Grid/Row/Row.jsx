import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import RowUtils from './RowUtils';

function Row(props) {
    let data = props.data;
    let linkUrl = '/currencies/' + data.name.toLowerCase();
    return (
        <tr key={data.rank}>
            <th scope="row">{data.rank}</th>
            <td>
                <Link to={linkUrl}>{data.name}</Link>
            </td>
            <td>{RowUtils.numToUsd(data.quotes.USD.market_cap)}</td>
            <td>{RowUtils.numToUsd(data.quotes.USD.price)}</td>
            <td>{RowUtils.numToUsdInteger(data.quotes.USD.volume_24h)}</td>
            <td>{RowUtils.numToSeparatedDigits(data.circulating_supply + ' ' + data.symbol)}</td>
            <td>{data.quotes.USD.percent_change_24h + '%'}</td>
        </tr>
    );
}

export default Row;