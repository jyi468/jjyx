import { REQUEST_GRID, RECEIVE_GRID, REQUEST_CHART, RECEIVE_CHART } from './actions'
import { combineReducers } from 'redux';

const initialGridState = {
    coins: [],
    pageNumber: 1
};

const initialChartState = {
};

function reducerApp(state = {grid: initialGridState, chart: initialChartState}, action) {
    /*return combineReducers({
        grid,
        chart
    });*/
    return {
        grid: grid(state.grid, action),
        chart: chart(state.chart, action)
    };
}

function grid(state = initialGridState, action) {
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

function chart(state = initialChartState, action) {
    switch (action.type) {
        case REQUEST_CHART:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CHART:
            return Object.assign({}, state, action.chart, {
                isFetching: false,
            });
        default:
            return state
    }
}

export default reducerApp;