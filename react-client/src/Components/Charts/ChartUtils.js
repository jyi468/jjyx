class ChartUtils {
    static createSeriesOptions(json, currencyName) {
        return Object.keys(json).reduce((accumulator, key) => {
            if (currencyName !== 'bitcoin' || (currencyName === 'bitcoin' && name !== 'Price (BTC)')) {
                let yData = {
                    data: json[key]
                };

                let name;

                switch (key) {
                    case "market_cap_by_available_supply":
                        name = "Market Cap";
                        break;
                    case "price_btc":
                        name = "Price (BTC)";
                        break;
                    case "price_usd":
                        name = "Price (USD)";
                        break;
                    case "volume_usd":
                        name = "24h Vol";
                        break;
                    default:
                        name = key;
                        break;
                }

                yData.name = name;

                accumulator.push(yData);
            }

            return accumulator;

        }, []);
    }
}

export default ChartUtils;