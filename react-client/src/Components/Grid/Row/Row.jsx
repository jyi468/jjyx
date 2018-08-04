import React from 'react';
import {Link} from 'react-router-dom';
import RowUtils from './RowUtils';

const Row = ({data}) => (
    <tr key={data.rank}>
        <th scope="row">{data.rank}</th>
        <td>
            <Link class="primary-lighter-hover" to={`/currencies/${data.name}`}>{data.name}</Link>
        </td>
        <td>{RowUtils.numToUsd(data.quotes.USD.market_cap)}</td>
        <td>{RowUtils.numToUsd(data.quotes.USD.price)}</td>
        <td>{RowUtils.numToUsdInteger(data.quotes.USD.volume_24h)}</td>
        <td>{RowUtils.numToSeparatedDigits(data.circulating_supply + ' ' + data.symbol)}</td>
        <td>{data.quotes.USD.percent_change_24h + '%'}</td>
    </tr>
);

export default Row;