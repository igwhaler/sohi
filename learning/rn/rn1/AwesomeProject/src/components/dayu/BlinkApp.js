import React, {Component} from 'react'
import {AppRegistry, View, Text} from 'react-native'

class Blink extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showText: true
    }

    /*setInterval(() => {
      let {showText} = this.state

      this.setState({showText: !showText})
    }, 1000)*/
  }

  render () {
    let {showText} = this.state
    let {text} = this.props

    return (
      <View>
        <Text>{showText ? text : ''}</Text>
      </View>
    )
  }
}

export default class BlinkApp extends Component {
  render () {
    return (
      <View>
        <Blink text="1" />
        <Blink text="2" />
        <Blink text="3" />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject',  () => BlinkApp)
