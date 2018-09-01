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
        <div className='row justify-content-center'>
          {/* <img className='img-fluid banner' src="./banner.jpg" alt="" /> */}
          <img className='img-fluid banner-mobile' src="./banner-mobile.jpg" alt="" />
          {this.props.auth.isAuthenticated() ?
            <Link to='/' className='logout btn btn-primary btn-sm' onClick={() => this.logout()}>Logout</Link>
            :
            <Link to='/' className='login btn btn-primary btn-sm' onClick={() => this.props.auth.login()}>Login</Link>}
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
