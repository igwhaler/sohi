import React, { useState, useEffect } from 'react';

const GetFriendStatus = (id, changeOnline) => {
    setTimeout(() => {
        changeOnline(1);
    }, 1000);
}

function useSelfHook(name) {
    const [isOnline, setOnline] = useState(0);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        GetFriendStatus(name, (status) => {
            setOnline(status);
            setLoading(false);
        });
        return () => {
            // cleanup
        }
    }, [name]);

    return [isLoading, isOnline]
}

function FriendHook() {
    const [isLoading, isOnline] = useSelfHook(0)

    return (
        isLoading
        ? <div>loading</div>
        : <div>{isOnline}</div>
    )
}

export default FriendHook;
