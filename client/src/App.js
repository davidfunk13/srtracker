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
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as modalActionCreators from './actions/modalActions';
import * as currentUserActionCreators from './actions/currentUserActions';
import * as battletagActionCreators from './actions/battletagActions';
import * as seasonFormActionCreators from './actions/forms/seasonFormActions';
import * as gameFormActionCreators from './actions/forms/gameFormActions';
import * as currentSeasonActionCreators from './actions/currentSeasonActions';

const auth = new Auth();

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Header profile={auth.getProfile()} auth={auth} {...this.props} />
          <Route exact path="/" render={props =>
            auth.isAuthenticated() ? (
              <Main profile={auth.getProfile()} auth={auth} {...this.props} />
            ) : (
                <NotFound />
              )} />
          <Route path="/callback" render={props => {
            return (<Callback profile={auth.getProfile()} auth={auth} {...this.props} />);
          }} />
          <Route exact path="/account" render={props =>
            auth.isAuthenticated() ? (
              <Account profile={auth.getProfile()} auth={auth} {...this.props} />
            ) : (
                <NotFound />
              )} />
          <Route exact path="/season" render={props =>
            auth.isAuthenticated() ? (
              <Season profile={auth.getProfile()} auth={auth} {...this.props} />
            ) : (
                <NotFound />
              )} />
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    showModal: state.showModal,
    currentUser: state.currentUser,
    currentBattletag: state.currentBattletag,
    currentSeason: state.currentSeason,
    forms:{
      seasonForm: state.seasonForm,
      gameForm: state.gameForm
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
    currentUserActions: bindActionCreators(currentUserActionCreators, dispatch),
    battletagActions: bindActionCreators(battletagActionCreators, dispatch),
    currentSeasonActions: bindActionCreators(currentSeasonActionCreators, dispatch),
    formActions: {
      seasonFormActions: bindActionCreators(seasonFormActionCreators, dispatch),
      gameFormActions: bindActionCreators(gameFormActionCreators, dispatch)
    }
  };
}

  export default connect(mapStateToProps, mapDispatchToProps)(App);
