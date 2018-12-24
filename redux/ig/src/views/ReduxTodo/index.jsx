import React, { Component } from 'react'
import { connect } from 'react-redux'
import { INCREMENT } from '../../actions'

class ReduxTodo extends Component {
  render () {
    console.log(this)

    let { count } = this.props

    return (
      <div>
        <p>{count}</p>
        <span onClick={() => { this.props.increment({ base: 10 }) }}>+</span>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    count: state.count,
    name: state.name
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    increment ({base}) {
      return dispatch(INCREMENT({base}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTodo)
