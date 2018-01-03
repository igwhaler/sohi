import React, { Component } from 'react';
import {Button} from 'antd'

import HtmlPart from './component/HtmlPart'
import CssPart from './component/CssPart'

export default class FE extends Component {
  constructor (props) {
    super(props)

    this.state = {
      date: new Date(),
      message: 123,
      isShow: false
    };
  }

  componentDidMount () {
    // console.log(this)
  }

  handleChangeTime () {
    this.setState({
      date: new Date()
    })
  }

  handleClick () {
    // console.log(this, 123)
    let {isShow} = this.state

    this.setState({
      isShow: !isShow
    })
    this.handleChangeTime()
  }

  render () {
    let {date, isShow} = this.state
    let {handleClick} = this

    return (
      <div>
        <Button type="primary" onClick={() => this.handleClick()}>爸爸</Button>

        <HtmlPart time={date.toLocaleString()} changeMyLove={handleClick.bind(this)}/>
        <CssPart isShow={isShow} time={date.toLocaleString()}>
          <h2>123123</h2>
        </CssPart>
      </div>
    );
  }
};
