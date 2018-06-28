import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {makeMainRoutes} from './router';
const router = makeMainRoutes();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       {router}
      </div>
    );
  }
}

export default App;
