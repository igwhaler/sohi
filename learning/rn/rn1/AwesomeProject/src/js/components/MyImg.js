import React, { Component } from 'react'
import { AppRegistry, Image, View } from 'react-native'

import oImg  from "../../assets/tgMatchBg.png"

import styles from './styles'

console.log(styles)
let {MyImageStyles} = styles

export default class MyImg extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={MyImageStyles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={oImg} style={{width: 193, height: 110}}/>
      </View>
    )
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => MyImg);