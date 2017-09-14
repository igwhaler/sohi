import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MyImg from './src/js/components/MyImg'

export default class App extends React.Component {
  render() {
    let img = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    return (
      <View style={styles.container}>
        <Text>大鱼锅锅</Text>
        <MyImg />
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
