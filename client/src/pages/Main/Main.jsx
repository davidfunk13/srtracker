import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className='container--logged-out'>
          <h1 className="heading u-margin-bottom-small">Thank you for logging in!</h1>
          
        </div>
        <a href="/menu"><button className='btn'>Menu</button></a>
      </div>
    );
  }
}
 