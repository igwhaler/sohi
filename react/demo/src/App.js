import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomePage></HomePage>
      </header>
    </div>
  );
}

export default App;
