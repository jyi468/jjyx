export const REQUEST_GRID = 'REQUEST_GRID';
export const RECEIVE_GRID = 'RECEIVE_GRID';

export function requestGrid(numItems) {
    return { type: 'REQUEST_GRID', numItems };
}