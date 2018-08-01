import { REQUEST_GRID, RECEIVE_GRID } from './actions'
import { combineReducers } from 'redux';

const initialState = {
    coins: [],
    pageNumber: 1
};

function gridApp(state = initialState, action) {
    /*return combineReducers({
        grid
    });*/
    return {
        grid: grid(state.grid, action)
    };
}

function grid(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GRID:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_GRID:
            return Object.assign({}, state, action.grid, {
                isFetching: false,
            });
        default:
            return state
    }
}
// Above is reducer composition - can use combineReducers from redux to do the same

export default gridApp;