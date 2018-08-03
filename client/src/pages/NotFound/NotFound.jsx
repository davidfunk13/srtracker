import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="container container--notfound">
        <h1>welcome</h1>
        <p>Please click Login above to create a username or login and begin using the app!</p>
        <h2>Features</h2>
        <ol className='features-ol'>
          <li>Track Multiple Accounts</li>
          <li>Add a New Season to your account to start tracking</li>
          <li>Tracks heros of focus for each Season</li>
          <li>Accounts and seasons are saved to your username.</li>
          <li>Come back and retreive them anytime by logging in.</li>
        </ol>
      </div>
    );
  }
}
