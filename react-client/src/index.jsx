// Entry point of application where we point to all jsx files
// jsx files are syntactic sugar for React.createElement(component, props, ...children). You can return
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
//import Button from '@material-ui/core/Button';

import "bootstrap";
import $ from 'jquery';
import { _ } from 'lodash'
import App from './Components/App';
import reducerApp from './Redux/reducers';

// export for others scripts to use
window.$ = $;
window.jQuery = $;

/* React Store */
const loggerMiddleware = createLogger();
// Create store using root reducer
const store = createStore(reducerApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

// Log initial state
console.log(store.getState());

// Render first component to virtual DOM
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));