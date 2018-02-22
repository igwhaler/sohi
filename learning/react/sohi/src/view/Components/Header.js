import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Icon } from 'antd'

const {SubMenu, ItemGroup } = Menu

export default class Header extends Component {
  state = {
    current: 'index'
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }

  render () {
    return (
      <div className="wrap-common-header">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="index">
            <Link to="/">
              <Icon type="appstore" />首页
            </Link>
          </Menu.Item>

          <SubMenu title={<span><Icon type="setting" />前端</span>}>

            <ItemGroup title="基础">
              <Menu.Item key="HTML">
                <Link to="/fe/html">HTML</Link>
              </Menu.Item>
              <Menu.Item key="CSS">
                <Link to="/fe/css">CSS</Link>
              </Menu.Item>
              <Menu.Item key="Javascript">
                <Link to="/fe/js">Javascript</Link>
              </Menu.Item>
            </ItemGroup>

            <ItemGroup title="框架">
              <Menu.Item key="vue">
                <Link to="/fe/vue">Vue</Link>
              </Menu.Item>
              <Menu.Item key="react">
                <Link to="/fe/react">React</Link>
              </Menu.Item>
            </ItemGroup>
          </SubMenu>

          <Menu.Item key="be">
            <a href="/" target="_blank" rel="noopener noreferrer">Node</a>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}