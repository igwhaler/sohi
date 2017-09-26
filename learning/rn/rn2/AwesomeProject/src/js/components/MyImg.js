import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';
import img  from "../../assets/tg-match-bg.png";

export default class MyImg extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View>
        <Image source={img} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => MyImg);