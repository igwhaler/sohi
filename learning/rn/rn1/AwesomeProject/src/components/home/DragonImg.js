import React, {Component} from 'react'
import {AppRegistry, Image, View} from 'react-native'

import dragon from '../../assets/dragon.jpg'

export default class DragonImg extends Component {
  render () {
    return <View>
      <Image source={dragon} style={{width: '100%'}} />
    </View>
  }
}

AppRegistry.registerComponent('AwesomeProject', () => DragonImg)