import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Callback from "./components/Callback/Callback";
import Auth from "./components/Auth/Auth";
import history from "./components/Auth/history";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Account from "./pages/Account/Account";
import Season from "./pages/Season/Season";

const auth = new Auth();

class App extends Component {
  render() {
    return (
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
            exact
            path="/account"
            render={props =>
              auth.isAuthenticated() ? (
                <Account profile={auth.getProfile()} auth={auth} {...props} />
              ) : (
                <NotFound />
              )
            }
          />
          <Route
            exact
            path="/season"
            render={props =>
              auth.isAuthenticated() ? (
                <Season profile={auth.getProfile()} auth={auth} {...props} />
              ) : (
                <NotFound />
              )
            }
          />
        </div>
      </Router>
    );
  }
}
export default App;
