import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { API_URL } from '../../config/api.js'
import './art.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '文章'
  }

  state = {
    artDetail: null
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let { id } = this.$router.params

    return (
      <View className="art">
        <WebView src={`https://igwhaler.com/article?id=${id}`} />
      </View>
    )
  }
}
