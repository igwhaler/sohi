import React, { Component } from 'react';
import { connect } from "react-redux"
// import { store, actions } from './redux'
import * as actions from '../../store/actions'

class TextMsg extends Component {
  /* constructor (props) {
    super(props)
  } */

  componentDidMount () {
    console.log(this)
  }

  increaseCount = () => {
    this.props.dispatch(actions.increase(2))
  }

  decreaseCount = () => {
    this.props.dispatch(actions.decrease())
  }

  render () {
    let { testMsg } = this.props

    return (
      <div>
        <p>{testMsg.count}</p>

        <div>
          <span onClick={this.increaseCount}> + </span>
          <span>  |  </span>
          <span onClick={this.decreaseCount}> - </span>
        </div>
      </div>
    )

  }
}

const mapStateToProps = state => ({
  testMsg: state.testMsg
})

export default connect(mapStateToProps)(TextMsg)
