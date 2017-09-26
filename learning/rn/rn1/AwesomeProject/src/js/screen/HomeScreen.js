import React, {Component} from 'react'
import {AppRegistry, View, Text, Button} from 'react-native'

import MyImg from '../components/MyImg'

export default class MainScreen extends Component {
  static navigationOptions = {
    title: '首页'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <MyImg />

        <Button
          title="呵呵哒"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => MainScreen)
