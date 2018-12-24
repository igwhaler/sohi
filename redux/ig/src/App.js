import React, { Component } from 'react'
import StateLifting from './views/StateLifting'
import ContextUse from './views/ContextUse'
import ReduxTodo from './views/ReduxTodo'

class App extends Component {
  render() {
    return (
      <div>
        <StateLifting></StateLifting>
        <ContextUse></ContextUse>
        <ReduxTodo></ReduxTodo>
      </div>
    );
  }
}

export default App;
