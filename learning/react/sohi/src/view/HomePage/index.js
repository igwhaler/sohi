import React, { Component } from 'react';

import './style/homePage.less';

import MyTest from './component/MyTest';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <MyTest />
      </div>
    );
  }
}

export default HomePage;
