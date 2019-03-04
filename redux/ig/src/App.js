import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import TestRedux from './pages/TestRedux'

class App extends Component {
  state = { a: 1 }

  componentDidMount () {
    this.setState({a: this.state.a + 1})
    console.log(this.state.a)

    setTimeout(() => {
      console.log(this.state.a)
      this.setState({a: this.state.a + 1})
      console.log(this.state.a)
    }, 0)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/* <TestRedux></TestRedux> */}
      </div>
    );
  }
}

export default App;
