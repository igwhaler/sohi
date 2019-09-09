import React, { Component } from 'react';
import ForExample from './components/ForExample.jsx'
import FriendStatus from './components/FriendStatus.jsx'

export default class extends Component {
  render () {
    return (
      <>
        <ForExample></ForExample>
        <FriendStatus id="123"></FriendStatus>
      </>
    )
  }
}
