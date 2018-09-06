import React, { Component } from "react";

export default class NotFound extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-12'>
            <h1>Welcome</h1>
            <p className='section text-center'>Please click Login above to create a username or login and begin using the app!</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <h1>features</h1>
            <ol className='section'>
              <li>Track Multiple Accounts</li>
              <li>Add a New Season to your account to start tracking</li>
              <li>Tracks heros of focus for each Season</li>
              <li>Accounts and seasons are saved to your username.</li>
              <li>Come back and retreive them anytime by logging in.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
