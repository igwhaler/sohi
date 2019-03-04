import React, { Component } from 'react';
import { handleIncreaseCount, handleDecreaseCount } from '../../redux'

class TextMsg extends Component {
  state = {a: 1}

  componentWillMount () {
    console.log(1)
  }

  componentDidMount () {
    console.log(2)
    // this.setState({ a: 2 })
  }

  componentWillReceiveProps() {
    console.log('3')
  }

  shouldComponentUpdate() {
    console.log('should')
    return false
  }

  componentWillUpdate () {
    console.log(4)
  }

  componentDidUpdate () {
    console.log(5)
  }

  render () {
    console.log('render')

    return (
      <div>
        <p>{this.props.b}</p>
        <div>
          <span onClick={handleIncreaseCount}> + </span>
          <span>  |  </span>
          <span onClick={handleDecreaseCount}> - </span>
        </div>
      </div>
    )

  }
}

export default class TestRedux extends Component {
  state = {c : 123}

  componentDidMount () {
    this.setState({c: 456})
  }

  render () {
    return (
      <div>
        <TextMsg b={this.state.c}></TextMsg>
      </div>
    )
  }
}
