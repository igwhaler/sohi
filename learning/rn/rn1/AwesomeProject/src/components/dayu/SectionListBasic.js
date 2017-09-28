import React, {Component} from 'react'
import {AppRegistry, View, Text, SectionList} from 'react-native'

export default class SectionListBasic extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<View>
        <SectionList
          sections={[
                      {title: 'D', data: ['asd']},
                      {title: 'J', data: ['asdasd', 'jsdasd']}
                    ]}

          renderItem={({item}) => <Text>{item}</Text>}

          renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        />
      </View>)
  }
}

AppRegistry.registerComponent('AwesomeProject', () => SectionListBasic)
