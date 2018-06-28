import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';
import history from './components/Auth/history';
import Main from './pages/Main/Main';


export const makeMainRoutes = () => {

    return (
        <Router history={history}>
            <div>
                <Route exact path="/" render={(props) =>
                    <Main {...props} />
                }
                />
                <Route path="/callback" render={(props) => {
                    return <Callback  {...props} />
                }} />
            </div>
        </Router>
    );
}