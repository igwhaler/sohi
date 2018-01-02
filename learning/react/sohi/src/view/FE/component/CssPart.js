import React, {Component} from 'react'

export default class CssPart extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  componentDidMount () {
    // console.log(this, 1)
  }

  componentDidUpdate () {
    // console.log(this, 2)
  }

  handleChange (e) {
    let _val = e.target.value

    this.setState({
      value: _val
    })

    console.log(JSON.parse(_val))
  }

  render () {
    let {value} = this.state
    let {time} = this.props
    let _list = [
      {
        val: '哈哈哈',
        id: 123
      },
      {
        val: '呵呵呵',
        id: 456
      },
      {
        val: '嘿嘿嘿',
        id: 789
      }
    ]

    return (
      <div>
        <hr />
        <p>{time}</p>

        <div style={{paddingLeft: '20px'}}>
          <select value={value} onChange={(e) => this.handleChange(e)}>
            {_list.map((item, index) => {
              return <option key={index} value={item.val}>{item.val}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
}