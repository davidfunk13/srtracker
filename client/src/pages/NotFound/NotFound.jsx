import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <h1 className='u-margin-top-small u-margin-bottom-small'>Welcome to my Overwatch SR Tracker</h1>
        <p className='u-margin-bottom-small'>Please click Login above to create a username or login and begin using the app!</p>
        <h2 className='underline'>Features:</h2>
        <li>Track Multiple Accounts</li>
        <li>Add a New Season to your account to start tracking</li>
        <li>Tracks heros of focus for each Season</li>
        <li>Accounts and seasons are saved to your username.</li>
        <li>Come back and retreive them anytime by logging in.</li>
      </div>
    );
  }
}
