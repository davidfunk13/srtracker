import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
import "./App.css";
import Auth from './components/Auth/Auth';
import { makeMainRoutes } from './router';

const router = makeMainRoutes();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('root'));

/* eslint no-restricted-globals: 0*/


registerServiceWorker();
