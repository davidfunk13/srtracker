import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class Header extends Component {
  componentDidMount() {
    this.props.auth.isAuthenticated()
    this.props.auth.getProfile()
    console.log(this.props)
  }
  componentWillReceiveProps() {
    this.props.auth.isAuthenticated()
  }

  logout(){
    this.props.auth.logout()
    this.props.currentUserActions.purgeCurrentUser()
  }
  
  render() {
    return (
      <header className="header">
        <p className='banner-text u-margin-bottom-small'>SR TRACKER</p>
        {this.props.auth.isAuthenticated() ?
          <Link to='/' className='nav-link nav-link--login u-margin-bottom-small' onClick={() => this.logout()}>Logout</Link>
          :
          <Link to='/' className='nav-link nav-link--login u-margin-bottom-small' onClick={() => this.props.auth.login()}>Login</Link>}
      </header>
    );
  }
}

export default Header
// withRouter(connect(
  // mapStateToProps,
  // mapDispatchToProps
// )(Header)
// );
