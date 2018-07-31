import { REQUEST_GRID, RECEIVE_GRID } from './actions'

const initialState = {
    maxPage: 17,
    // rename coins to gridData?
    coins: []
};

function gridApp(state = initialState, action) {
    return {
        grid: gridFilter(state.coins, action)
    };
}

function gridFilter(state = [], action) {
    switch (action.type) {
        case REQUEST_GRID:
            let newCoins = [];
            for (let i = 0; i < action.numItems; i++) {
                newCoins.push({rank: i + 1});
            }
            return Object.assign({}, state, {
                coins: newCoins
            });
        default:
            return state
    }
}
// Above is reducer composition - can use combineReducers from redux to do the same

export default gridApp;