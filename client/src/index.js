import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import './reset.css';
import "./App.css";
import App from './App';
import createAppStore from './store'
import { PersistGate } from 'redux-persist/es/integration/react'

const { persistor, store } = createAppStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App persistor={persistor}/>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
/* eslint no-restricted-globals: 0*/
registerServiceWorker();
