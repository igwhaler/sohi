import React from 'react';
import { useFriendStatus } from '../hooks'

export default function (props) {
  let { id } = props
  let isOnline = useFriendStatus(id)

  if (isOnline === null) {
    return <div>loading...</div>
  }

  return (
    <span>
      {
        isOnline ? 'online' : 'offline'
      }
    </span>
  )
}
