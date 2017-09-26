import React, {Component} from 'react'
import {AppRegistry, View, Button} from 'react-native'

import List from '../components/List'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: '呵呵哒'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <List />

        <Button
          title="首页"
          onPress={() =>
            navigate('Home', { name: '123' })
          }
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => ProfileScreen)