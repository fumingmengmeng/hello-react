import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     /*  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            哈哈哈
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */
      // <div> hello world</div>
      <div className="container"> 
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
        <h1>Hello!</h1>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
