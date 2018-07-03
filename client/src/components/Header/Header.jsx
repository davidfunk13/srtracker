import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import * as accountActionCreators from '../../actions/accountActions';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    // console.log(this.props)
    this.props.auth.isAuthenticated()
    this.props.auth.getProfile()
  }
  componentWillReceiveProps(){
    // console.log(this.props)
    this.props.auth.isAuthenticated()
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
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
    accountActions: bindActionCreators(accountActionCreators, dispatch),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
