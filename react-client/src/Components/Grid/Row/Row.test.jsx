import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Row from './Row';
describe('Row Component Test', () => {
    it('should render correctly', () => {
        const coinData = {
            "name": 'Bitcoin',
            "rank": 1,
            "circulating_supply": 17170100.0,
            "total_supply": 17170100.0,
            "max_supply": 21000000.0,
            "quotes": {
                "USD": {
                    "price": 8190.56,
                    "volume_24h": 5954760000.0,
                    "market_cap": 140632734256.0,
                    "percent_change_1h": -0.26,
                    "percent_change_24h": 0.04,
                    "percent_change_7d": 10.42
                }
            }
        };

        const output = shallow(
            <Row data={coinData} />
        );

        expect(shallowToJson(output)).toMatchSnapshot();
    });
});