import React, { Component } from 'react';
import {
  Button,
  LocaleProvider,
  DatePicker,
  message
} from 'antd';

export default class MyTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    };
  }

  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }

  render () {
    return (
      <div className="my-test">
        <Button type="primary">点击</Button>

        <LocaleProvider>
          <div>
            <DatePicker onChange={value => this.handleChange(value)} />
            <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
          </div>
        </LocaleProvider>
      </div>
    );
  }
}