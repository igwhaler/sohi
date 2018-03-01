import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import MyImg from './src/js/components/MyImg'
import Greeting from './src/js/components/Greeting'
import BlinkApp from './src/js/components/BlinkApp'
import StyleComponent from './src/js/components/StyleComponent'

export default class App extends React.Component {
  render() {
    let img = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    return (
      <View style={styles.container}>
        <Text>大鱼锅锅</Text>
        <MyImg />
        <Greeting text="123" />
        <BlinkApp />
        <StyleComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'red'
  },
});
