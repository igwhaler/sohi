import React, {Component} from 'react'
import {
  AppRegistry,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated
} from 'react-native'

import MyImg from '../components/home/MyImg'
import DragonImg from '../components/home/DragonImg'

import HomeScreenStyles from './styles/HomeScreenStyles.js'

export default class MainScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fadeAnim: new Animated.Value(0),
      navBtnOpacity: 1
    }
  }

  static navigationOptions = {
    title: '首页'
  }

  _changeNavigation = () => {
    const { navigate } = this.props.navigation

    this.setState({navBtnOpacity: 0.8})
    // navigate('Profile', { name: '大鱼你个锅锅' })
  }

  _changeNavigationOut = () => {
    this.setState({navBtnOpacity: 1})
  }

  componentDidMount () {
    let {fadeAnim} = this.state

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start()
  }

  render () {
    let {_changeNavigation, _changeNavigationOut} = this
    let {fadeAnim, navBtnOpacity} = this.state

    return <View style={HomeScreenStyles.container}>
            <ScrollView>

              <Animated.View style={{opacity: fadeAnim}}>
                <View style={HomeScreenStyles.header}>
                  <MyImg />
                </View>
              </Animated.View>

              <View style={HomeScreenStyles.main}>

                <View style={HomeScreenStyles.wrapText}>
                  <Text style={HomeScreenStyles.text}>
                    <Text style={HomeScreenStyles.textIndent}>缩进</Text>Packager会打包所有的图片并且依据屏幕精度提供对应的资源。譬如说，iPhone 5s会使用check@2x.png，而Nexus 5上则会使用check@3x.png。如果没有图片恰好满足屏幕分辨率，则会自动选中最接近的一个图片。
                  </Text>
                </View>

                <View style={HomeScreenStyles.wrapBtn}>

                  <DragonImg />

                  <TouchableOpacity onPress={_changeNavigation} onPressOut={_changeNavigationOut}>
                    <View style={[HomeScreenStyles.btn, {opacity: navBtnOpacity}]}>
                      <Text style={HomeScreenStyles.btnText}>大鱼你个锅锅</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>
            </ScrollView>
          </View>
  }
}

AppRegistry.registerComponent('AwesomeProject', () => MainScreen)
