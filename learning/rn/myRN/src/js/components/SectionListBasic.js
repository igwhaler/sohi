import React, {Component} from 'react'
import {AppRegistry, View, Text, SectionList} from 'react-native'

export default class SectionListBasic extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  redner () {
    return <View>
            <SectionList></SectionList>
          </View>
  }
}