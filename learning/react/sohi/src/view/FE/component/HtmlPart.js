import React, {Component} from 'react'
import {Button} from 'antd'

export default class HtmlPart extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // console.log(this)
  }

  handleClick () {
    let {changeMyLove} = this.props

    changeMyLove()
  }

  render () {
    let {time} = this.props

    return (
      <div>
        <hr />
        <p>{time}</p>
        <Button type="dashed" onClick={() => this.handleClick()}>儿砸</Button>
      </div>
    )
  }
}