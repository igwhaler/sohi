import React, { Component } from 'react';
import HomePage from './view/HomePage'
import IgwHeader from './components/IgwHeader'

class App extends Component {
  render() {
    return (
      <div className="blog-container">
        <IgwHeader />
        <HomePage />
      </div>
    );
  }
}

export default App;
