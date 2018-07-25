// Entry point of application where we point to all jsx files
// jsx files are syntactic sugar for React.createElement(component, props, ...children). You can return
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import "bootstrap";
import {$, jQuery} from 'jquery';
import { _ } from 'lodash'

import App from './Components/App';

// Global
window.$ = $;
window.jQuery = jQuery;
window._ = _;

// Render first component to virtual DOM
ReactDOM.render(<App />, document.getElementById('root'));