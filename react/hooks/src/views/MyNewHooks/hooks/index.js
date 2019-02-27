import { useState, useEffect } from 'react';

export const useFriendStatus = function (friendId) {
  const [isOnline, setOnline] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setOnline(true)
    }, 2000)
  })

  return isOnline
}
