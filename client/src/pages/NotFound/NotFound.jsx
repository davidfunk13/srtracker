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
            <h1>welcome</h1>
            <p className='section'>Please click Login above to create a username or login and begin using the app!</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <h2>features</h2>
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
