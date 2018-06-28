import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import { withRouter } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    console.log(this.props)
    console.log(this.props.auth.isAuthenticated())
  }
  
  render() {
    return (
        <header className="header">
          <h1>SR TRACKER</h1>
          {this.props.auth.isAuthenticated() ? <button onClick={() => this.props.auth.logout()}>Logout</button> : <button onClick={() => this.props.auth.login()}>Login</button> }
        </header>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
