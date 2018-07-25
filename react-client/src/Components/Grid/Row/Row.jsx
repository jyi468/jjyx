import React, { Component } from 'react';

function Row(props) {
    let data = props.data;
    return (
        <tr key={data.rank}>
            <th scope="row">{data.rank}</th>
            <td>{data.name}</td>
            <td>{data.quotes.USD.market_cap}</td>
            <td>{data.quotes.USD.price}</td>
            <td>{data.quotes.USD.volume_24h}</td>
            <td>{data.circulating_supply}</td>
            <td>{data.quotes.USD.percent_change_24h}</td>
        </tr>
    );
}

export default Row;