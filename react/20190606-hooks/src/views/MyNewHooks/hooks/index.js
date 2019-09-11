import { useState, useEffect } from 'react';

export const useFriendStatus = function (friendId) {
    const [isOnline, setOnline] = useState(null)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setOnline(true)
        }, 2000)

        return () => {
            clearTimeout(timeId);
        };
    })

    return isOnline
}
