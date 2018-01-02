import React, { Component } from 'react';

// import HomePage from './view/HomePage';
import FE from './view/FE'

class App extends Component {
  render() {
    return (
      <div data-type="123">
        <FE name="fe" counter={100} />
      </div>
    );
  }
}

export default App;