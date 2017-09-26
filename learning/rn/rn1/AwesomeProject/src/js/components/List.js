import React, {Component} from 'react'
import {AppRegistry, View, Text, FlatList, StyleSheet} from 'react-native'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    let {okey} = this.props
    return <Text style={styles.item}> {okey} </Text>
  }
}

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    let data = [
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'}
    ]

    this.setState({
      data
    })
  }

  render () {
    let {data} = this.state
    console.log(data)
    return (
      <View style={styles.container}>
        <FlatList data={data} renderItem={({item}) => <Item okey={item.key} />} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginTop: 20,
    backgroundColor: 'tan'
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 44
  }
})

AppRegistry.registerComponent('AwesomeProject', () => List)
