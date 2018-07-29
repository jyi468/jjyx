import { REQUEST_GRID, RECEIVE_GRID } from './actions'

const initialState = {
    maxPage: 17,
    // rename coins to gridData?
    coins: []
}

function gridApp(state = initialState, action) {
    return {
        gridFilter: gridFilter(state.coins, action)
    };
}

function gridFilter(state = [], action) {
    switch (action.type) {
        case REQUEST_GRID: 
            return Object.assign({}, state, {
                coins: [];
            });
        default:
            return state
    }
}
// Above is reducer composition - can use combineReducers from redux to do the same

export default gridApp;