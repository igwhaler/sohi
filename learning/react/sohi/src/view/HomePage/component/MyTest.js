import React, { Component } from 'react';
import './style/myTest.less';


export default class MyTest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount () {
    console.log('willMount')
  }

  componentDidMount () {
    console.log('didMount')
  }

  componentWillReceiveProps (nextProps, nextState) {
    console.log('receiveProps', nextProps, nextState)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldUpdate', nextProps, nextState)

    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('willUpdatte', nextProps, nextState)
  }

  componentDidUpdatte (nextProps, nextState) {
    console.log('didUpdate', nextProps, nextState)
  }

  render () {
    console.log('render')

    let {name} = this.props;

    return (
      <div className="my-test">
        <p className="name">{name}</p>
      </div>
    );
  }
}