import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestRedux from './pages/TestRedux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <TestRedux></TestRedux>
      </div>
    );
  }
}

export default App;
