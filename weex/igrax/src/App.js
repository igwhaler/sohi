import {createElement, Component} from 'rax';
import styles from './App.css';
import View from 'rax-view';
import Text from 'rax-text';
import Touchable from 'rax-touchable';
import Image from 'rax-image';
import Button from 'rax-button';
import Toast from 'universal-toast';
import Modal from 'rax-modal';
import Video from 'rax-video';
import TabHeader from 'rax-tabheader';
import { isWeex, isWeb } from 'universal-env';
import Link from 'rax-link';

console.log(navigator, isWeex, isWeb)

class HelloWorld extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'hell'
    }
  }

  componentWillReceiveProps (newProps) {
    // console.log(newProps)
  }

  shouldComponentUpdate (newProps, newState) {
    // console.log(newProps, newState)

    return true
  }

  showModal = () => {
    this.refs.modal.show()
  }

  hideModal = () => {
    this.refs.modal.hide()
  }

  render () {
    let { num } = this.props

    return (
      <View style={styles.helloWorld}>
        <Text
          style={styles.countNum}
          onClick={this.showModal}>
          {num}
        </Text>

        <View style={styles.gImgList}>
          <View style={styles.gImg}>
            <Image
              source={{uri: 'https://ws1.sinaimg.cn/large/bbc609d5ly1ftcp05mzvoj23402c048c.jpg'}}
              style={{width: 100, height: 100}}
              resizeMode="contain"
            />
          </View>

          <View style={styles.gImg}>
            <Image
              source={{ uri: 'https://ws1.sinaimg.cn/large/bbc609d5ly1ftcp05mzvoj23402c048c.jpg' }}
              style={{ width: 100, height: 100 }}
              resizeMode="cover"
            />
          </View>

          <View style={styles.gImg}>
            <Image
              source={{ uri: 'https://ws1.sinaimg.cn/large/bbc609d5ly1ftcp05mzvoj23402c048c.jpg' }}
              style={{ width: 100, height: 100 }}
              resizeMode="stretch"
            />
          </View>

          <View style={styles.gImg}>
            <Image
              source={{ uri: 'https://ws1.sinaimg.cn/large/bbc609d5ly1ftcp05mzvoj23402c048c.jpg' }}
              style={{ width: 100, height: 100 }}
              resizeMode="center"
            />
          </View>
        </View>

        <Modal ref="modal">
          <View>
            <Text on>
              I am a dialog
            </Text>
          </View>
          <Touchable onPress={this.hideModal}>
            <Text>
              Close
            </Text>
          </Touchable>
        </Modal>
      </View>
    )
  }
}

class OhSohi extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  showModal = () => {
    Toast.show('1234')
  }

  render () {
    return (
      <View style={styles.ohSohi}>
        <Button
          onPress={this.showModal}
          style={{backgroundColor: 'red'}}>

          <text>点击</text>

        </Button>

        <Video
          style={{ width: 750, height: 400 }}
          autoPlay={false}
          src="https://cloud.video.taobao.com/play/u/2780279213/p/1/e/6/t/1/d/ld/36255062.mp4" />

        <View>
          <Link href="https://youpin.mi.com/detail?gid=104162">有品</Link>
        </View>

        <View>
          <Link href="https://baidu.com">百度</Link>
        </View>
      </View>
    )
  }
}

class App extends Component {
  state = {
    num: 0
  }

  renderItem = (item, index) => {
    return <View>
      <Text>{item}</Text>
    </View>;
  }

  increment = () => {
    this.setState(prevState => {
      return {
        num: ++ prevState.num
      }
    })
  }

  render() {
    let {
      state,
      increment
    } = this

    return (
      <View style={styles.app}>

        <TabHeader
          dataSource={['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6']}
          containerStyle={{}}
          renderItem={this.renderItem}
          itemWidth="187.5rem"
          itemStyle={{}}
          selected={1}
          itemSelectedStyle={{}}
          dropDownCols={6}
          type="dropDown-border-scroll"
        />

        <Text onClick={increment}>+</Text>

        <HelloWorld num={state.num} />

        <OhSohi />
      </View>
    );
  }
}

export default App;
