// React / Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Material Design Bootstrap
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// Custom Styles
import css from './styling/styles.css';
import img from './resources/images/cmc_logo_full.png';

// Global
import $ from 'jquery';
import { _ } from 'lodash'

// App Specific
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