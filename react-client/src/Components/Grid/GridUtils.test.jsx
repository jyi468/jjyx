import {GridUtils, compareCoins} from "./GridUtils";

"./GridUtils";

describe('GridUtils Test', () => {
    it('should map from data and rank coins in the proper order', () => {
        let response = {
            data: {
                45: {
                    rank: 10
                },
                34: {
                    rank: 1
                },
                11: {
                    rank: 8
                },
                99: {
                    rank: 2
                }
            }
        };

        let coins = GridUtils.createCoins(response);

        expect(coins).toEqual(
            [
                {rank: 1},
                {rank: 2},
                {rank: 8},
                {rank: 10}
            ]
        );
    });

    it('should map default object to array', () => {
        expect(GridUtils.createCoins()).toEqual([]);
    })
});