import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Button } from 'antd'

import HtmlPart from './component/HtmlPart'
import CssPart from './component/CssPart'

export default class FE extends Component {
  constructor (props) {
    super(props)

    this.state = {
      date: new Date(),
      message: 'IndexMessage',
      isShow: false
    };
  }

  componentDidMount () {
    console.log(this.props.router)
  }

  handleChangeTime () {
    this.setState({
      date: new Date()
    })
  }

  handleClick () {
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
      <Route
        path="/fe/html"
        render={() => (
          <div>
            <Button type="primary" onClick={() => this.handleClick()}>HTML</Button>

            <HtmlPart time={date.toLocaleString()} changeMyLove={handleClick.bind(this)}/>

            <CssPart isShow={isShow} time={date.toLocaleString()}>
              <h2>CssPart Children</h2>
              <h3>{this.state.message}</h3>
            </CssPart>
          </div>
        )}
      />
    );
  }
};