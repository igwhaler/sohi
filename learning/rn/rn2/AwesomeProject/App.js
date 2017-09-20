import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import MyImg from './src/js/components/MyImg'
import Greeting from './src/js/components/Greeting'
import BlinkApp from './src/js/components/BlinkApp'

export default class App extends React.Component {
  render() {
    let img = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    return (
      <View style={styles.container}>
        <Text>大鱼锅锅</Text>
        <MyImg />
        <Greeting text="123" />
        <BlinkApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
