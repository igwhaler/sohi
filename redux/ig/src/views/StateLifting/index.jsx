import React, { Component } from 'react';

class SelfCount extends Component {
  render () {
    return (
      <div>
        {this.props.count}
      </div>
    )
  }
}

class CountIncrement extends Component {
  render () {
    return (
      <span onClick={this.props.handleIncrment}>+</span>
    )
  }
}

export default class StateLifting extends Component {
  state = {
    count: 0
  }

  handleIncrment = () => {
    this.setState(preState => {
      let { count } = preState

      count ++

      return {
        count
      }
    })
  }

  render () {
    let { count } = this.state

    return (
      <div style={{padding: '20px', fontSize: '20px'}}>
        <SelfCount count={count} />
        <CountIncrement handleIncrment={this.handleIncrment} />
      </div>
    )
  }
}
