// Entry point of application where we point to all jsx files
// jsx files are syntactic sugar for React.createElement(component, props, ...children). You can return
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import "bootstrap";
import $ from 'jquery';

import { _ } from 'lodash'

import App from './Components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import gridApp from './Redux/reducers';
import { requestGrid } from "./Redux/actions";

// export for others scripts to use
window.$ = $;
window.jQuery = $;

/* React Store */
// Create store using root reducer
const store = createStore(gridApp);

// Log initial state
console.log(store.getState());

// Subscribe to state change actions. Unsubscribe with returned function
const unsubscribe = store.subscribe(() =>
    { console.log(store.getState()) }
);

store.dispatch(requestGrid(10));

unsubscribe();

// Render first component to virtual DOM
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));