import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Greeting extends Component {
  render() {
    let {text} = this.props
    return (
      <View>
        <Text>{text}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Greeting)