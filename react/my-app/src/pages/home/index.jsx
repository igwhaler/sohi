import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd-mobile';
import './index.less';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <p className="text">home</p>

        <Link to='my'>my</Link>

        <Button type="primary">primary</Button>
      </div>
    );
  }
}
