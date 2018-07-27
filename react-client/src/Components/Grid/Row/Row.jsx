import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';

function Row(props) {
    let data = props.data;
    let linkUrl = '/currencies/' + data.name.toLowerCase();
    return (
        <tr key={data.rank}>
            <th scope="row">{data.rank}</th>
            <td>
                <Link to={linkUrl}>{data.name}</Link>
            </td>
            <td>{data.quotes.USD.market_cap}</td>
            <td>{data.quotes.USD.price}</td>
            <td>{data.quotes.USD.volume_24h}</td>
            <td>{data.circulating_supply}</td>
            <td>{data.quotes.USD.percent_change_24h}</td>
        </tr>
    );
}

export default Row;