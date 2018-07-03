import React from "react";
import { Route, Router } from "react-router-dom";
import Callback from "./components/Callback/Callback";
import Auth from "./components/Auth/Auth";
import history from "./components/Auth/history";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Account from './pages/Account/Account';

const auth = new Auth();

export const makeMainRoutes = () => {
  return (
    <div className='app-wrapper'>
      <Router history={history}>
        <div>
          <Header profile={auth.getProfile()} auth={auth} />
          <Route
            exact
            path="/"
            render={props =>
              auth.isAuthenticated() ? (
                <Main profile={auth.getProfile()} auth={auth} {...props} />
              ) : (
                  <NotFound />
                )
            }
          />
          <Route
            path="/callback"
            render={props => {
              return (
                <Callback profile={auth.getProfile()} auth={auth} {...props} />
              );
            }}
          />
          <Route
            path="/account"
            render={props =>
              auth.isAuthenticated() ? (
                <Account auth={auth} profile={auth.getProfile()} {...props} />
              ) : (
                  <NotFound />
                )
            }
          />
        </div>
      </Router>
    </div>
  );
};
