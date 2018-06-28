import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from './Components/Callback/Callback';
import Auth from './Components/Auth/Auth';
import history from './Components/Auth/history';
import App from './App';

const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication();
//   }
// }

export const makeMainRoutes = () => {

    return (
        <Router history={history}>
            <div>
            <Route exact path="/" render={(props) => 
            <div>
                <App {...props} />
                </div>
            }
        />
            </div>
        </Router>
    );
}