import React, { Component } from 'react';
import {
  Button
} from 'antd'

import './style/homePage.less';

import MyTest from './component/MyTest';

class HomePage extends Component {
  count = 0

  constructor (props) {
    super(props);

    this.state = {
      count: 1,
      myTestName: 'myTest'
    };
  }

  componentDidMount () {
    // console.log(this.count)
  }

  handleUpdate (e) {
    this.count ++

    this.setState({
      myTestName: this.count
    })
  }

  render() {
    let {myTestName} = this.state

    return (
      <div className="home-page">
        <Button type="primary" onClick={(e) => this.handleUpdate(e)}>更新</Button>

        <MyTest name={myTestName} />
      </div>
    );
  }
}

export default HomePage;
