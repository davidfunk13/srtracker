import React, { Component } from 'react';
import './App.css';
import { makeMainRoutes } from './router';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as modalActionCreators from "./actions/modalActions";
import Header from './components/Header/Header';

const router = makeMainRoutes();

class App extends Component {
  componentDidMount() {
    this.props.auth.isAuthenticated()
  }

  render() {
    return (
        <div className='content'>
          {router}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
