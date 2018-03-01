import React, {Component} from 'react'
import {AppRegistry, StyleSheet, View, Text, TextInput, ScrollView} from 'react-native'

export default class LotsOfStyle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }

    this.inputChange = (text) => {
      console.log(this)
      this.setState({text})
    }
  }

  componentDidMount () {
    console.log(this)
  }

  render () {
    let {text} = this.state

    return (
      <ScrollView>
        <View style={styles.wrap}>
          <Text style={styles.biggreen}>安达市多</Text>
          <Text style={styles.bigtan}>123123</Text>
          <Text style={styles.biggreen}>安达市多</Text>

          <TextInput
            style={styles.input}
            onChangeText={this.inputChange}
          />
          <Text>{text}</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: 80,
    flexDirection: 'column',
    // justifyContent: 'center'
  },
  bigtan: {
    textAlign: 'center',
    color: 'seagreen',
    backgroundColor: 'tan'
  },
  biggreen: {
    backgroundColor: 'skyblue'
  },
  input: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 2,
    marginLeft: 10
  }
})

AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyle)
