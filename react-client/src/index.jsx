// Entry point of application where we point to all jsx files
// jsx files are syntactic sugar for React.createElement(component, props, ...children). You can return
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

// Render first component to virtual DOM
ReactDOM.render(<App />, document.getElementById('app'));