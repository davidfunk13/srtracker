import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from './Components/Callback/Callback';
import Auth from './Components/Auth/Auth';
import history from './Components/Auth/history';
import Main from './pages/Main/Main';

const auth = new Auth();

export const makeMainRoutes = () => {

    return (
        <Router history={history}>
            <div>
                <Route exact path="/" render={(props) =>
                    <Main {...props} />
                }
                />
            </div>
        </Router>
    );
}