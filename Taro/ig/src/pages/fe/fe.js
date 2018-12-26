import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './fe.less'
import avator from '../../assets/images/homePage/logo.png'

const feList = [
  {
    text: 'HTML'
  },
  {
    text: 'CSS'
  },
  {
    text: 'JavaScript'
  },
  {
    text: '杂项'
  }
]

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'FE',
    backgroundColor: '#fff'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <View className="g-user-info">
          <View className="user-info">
            <Image className="avatar" src={avator} />
            <View className="info">
              <View className="name">大鱼你个锅锅</View>
              <View className="des">锅锅很懒，啥都没有留下~~</View>
            </View>
          </View>
        </View>

        <View className="fe-list">
          {
            feList.map((item, index) => {
              return <View className="fe-item" key={index}>
                <View className="item">
                  <Text className="text">{item.text}</Text>
                  <Text className="more">></Text>
                </View>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}
