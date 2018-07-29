class GridUtils {
    /**
     * We create Row objects from the object that is returned by the
     * CoinMarketCap API
     *
     * @param response
     * @returns {any[]}
     */
    static createCoins(response={data: {}}) {
        // Change to array first
        let coins = Object.keys(response.data).map(function (key) {
            return response.data[key];
        });

        // Sort array by rank of Coin
        coins.sort(compareCoins);

        return coins;
    }
}

/**
 * Compare coin ranks. The lowest rank is shown first in the list
 * @param coin1
 * @param coin2
 * @returns {number}
 */
function compareCoins(coin1, coin2) {
    if (coin1.rank < coin2.rank) {
        return -1;
    }

    if (coin1.rank > coin2.rank) {
        return 1;
    }

    return 0;
}

export { GridUtils, compareCoins } ;