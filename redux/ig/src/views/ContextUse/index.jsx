import React, { Component } from 'react';

const ThemeContext = React.createContext({theme: 'light'})

function ThemeButton(props) {
  return (
    <ThemeContext.Consumer>
      {
        (contextValue) => {
          console.log(props, contextValue)

          return <span {...props} theme={contextValue.theme} onClick={contextValue.handleChangeTheme}>点击{contextValue.theme}</span>
        }
      }
    </ThemeContext.Consumer>
  )
}

function ToolBar(props) {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

export default class ContextUse extends Component {
  state = {
    theme: '1'
  }

  handleChangeTheme = () => {
    this.setState({
      theme: '2'
    })
  }

  render() {
    return (
      <>
        <ThemeContext.Provider value={{ theme: this.state.theme, handleChangeTheme: this.handleChangeTheme }}>
          <ToolBar />
        </ThemeContext.Provider>

        <ToolBar />

        <span onClick={this.handleChangeTheme}>修改主体</span>
      </>
    )
  }
}
