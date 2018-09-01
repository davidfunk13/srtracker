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

  logout() {
    this.props.auth.logout()
    // this.persistor.purge()
    this.props.currentUserActions.purgeCurrentUser()
  }

  render() {
    return (
      <header className="header">
        <div>
          <img className='banner' src="./banner.jpg" alt="" />
          <img className='banner-mobile' src="./banner-mobile.jpg" alt="" />
          {this.props.auth.isAuthenticated() ?
            <Link to='/' className='nav-link nav-link--login u-margin-bottom-small' onClick={() => this.logout()}>Logout</Link>
            :
            <Link to='/' className='nav-link nav-link--login u-margin-bottom-small' onClick={() => this.props.auth.login()}>Login</Link>}
        </div>
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
