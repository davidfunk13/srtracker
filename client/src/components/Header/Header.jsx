import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import * as accountActionCreators from '../../actions/accountActions';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class Header extends Component {
  componentDidMount() {
    this.props.auth.isAuthenticated()
    this.props.auth.getProfile()
    console.log(this.props.persistor)
  }
  componentWillReceiveProps() {
    this.props.auth.isAuthenticated()
  }

  render() {
    return (
      <header className="header">
        <p className='banner-text u-margin-bottom-small'>SR TRACKER</p>
        {this.props.auth.isAuthenticated() ?
          <Link to='/' className='nav-link nav-link--login u-margin-bottom-small' onClick={() => this.props.auth.logout()}>Logout</Link>
          :
          <Link to='/' className='nav-link nav-link--login u-margin-bottom-small' onClick={() => this.props.auth.login()}>Login</Link>}
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
