import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// import configureStore from './store';
import "./App.css";
import { makeMainRoutes } from './router';
import createAppStore from './store'
import { PersistGate } from 'redux-persist/es/integration/react'

// const { persistor, store } = createAppStore()

const router = makeMainRoutes();
const { persistor, store } = createAppStore();
// const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            persistor={persistor}
            loading='herro'
        >
            {router}
        </PersistGate>
    </Provider>,
    document.getElementById('root'));

/* eslint no-restricted-globals: 0*/


registerServiceWorker();
