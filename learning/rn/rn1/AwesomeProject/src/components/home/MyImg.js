import React, { Component } from 'react'
import { AppRegistry, Image, View } from 'react-native'

import {MyImageStyles} from './styles'
import oImg  from '../../assets/tgMatchBg.png'

export default class MyImg extends Component {
  render() {
    let pic = {
      uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3678264151,2617995328&fm=11&gp=0.jpg'
    }
    return (
      <View style={MyImageStyles.container}>
        <Image source={pic} style={{width: '100%', height: 200}}/>
        {/*<Image source={oImg} style={{width: 193, height: 110}}/>*/}
      </View>
    )
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => MyImg);