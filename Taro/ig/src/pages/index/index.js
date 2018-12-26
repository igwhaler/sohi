import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
import { API_URL } from '../../config/api.js'
import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    isLoading: true,
    artList: []
  }

  componentWillMount () {
    this.getArtList()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getArtList() {
    this.setState({
      isLoading: true
    })

    Taro.request({
      url: API_URL,
      method: 'GET',
      data: {
        query: `{articles{list{id,title,summary,cover,created}}}`
      },
      success: (res) => {
        let { articles } = res.data.data || {}

        this.setState({
          artList: articles.list,
          isLoading: false
        })
      }
    })
  }

  render () {
    let { isLoading, artList } = this.state

    return (
      <View>
        {
          isLoading
          ? <View className="g-loading">加载中...</View>
          : <View className="art-list">
              {
                artList.map((item, index) => {
                  return <View className="art-item" key={index}>
                    <Navigator className="introduce" url={`/pages/art/art?id=${item.id}`}>
                      <Text className="title">{ item.title }</Text>
                      <View className="content">{ item.summary }</View>
                      <Image className="image" src={item.cover} mode="widthFix" />
                      {/* <Text className="time">{{ Utils.DateFormat(item.created, 'yyyy-mm-dd HH:MM:ss') }}</Text> */}
                    </Navigator>
                  </View>
                })
              }
            </View>
        }
      </View>
    )
  }
}

