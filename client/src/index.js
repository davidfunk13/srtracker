import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
import { makeMainRoutes } from './router';
import App from './App';

import "./App.css";
const store = configureStore();
const router = makeMainRoutes();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

/* eslint no-restricted-globals: 0*/


registerServiceWorker();
