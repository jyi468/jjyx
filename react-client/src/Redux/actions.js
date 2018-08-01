import GridUtils from "../Components/Grid/GridUtils";

export const REQUEST_GRID = 'REQUEST_GRID';
export const RECEIVE_GRID = 'RECEIVE_GRID';
export const FETCH_GRID = 'FETCH_GRID';

export function requestGrid() {
    return {
        type: 'REQUEST_GRID',
    };
}

export function receiveGrid(grid) {
    return {
        type: RECEIVE_GRID,
        grid,
        receivedAt: Date.now()
    }
}

export function fetchGrid(pageNumber, numItems) {
    // Thunk middleware patches dispatch method as an argument to the function
    // allowing it to dispatch actions itself
    return dispatch => {

        dispatch(requestGrid());

        return fetch(`https://api.coinmarketcap.com/v2/ticker/?start=${100 * (pageNumber - 1) + 1}&limit=${numItems}`, {
            method: "GET"})
            .then((response) => response.json())
            .then((json) => {
                const grid = {
                    coins: GridUtils.createCoins(json),
                    maxPage: Math.ceil(json.metadata.num_cryptocurrencies / 100),
                    pageNumber: pageNumber,
                };
                dispatch(receiveGrid(grid))
            });
    }
}