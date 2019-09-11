import React, { useState, useEffect } from 'react';

export default function () {
    const [count, setCount] = useState(0)
    const [userInfo, updateAge] = useState({ age: 10, name: '呵呵' })

    useEffect(() => {
        document.title = `You clicked ${count} times`

        const timeId = setTimeout(() => {
            setCount(20)
        }, 2000);

        return () => {
            clearTimeout(timeId);
        };
    }, [count]);

    return (
        <div>
            <div>
                <p>{userInfo.age}</p>
                <p>{userInfo.name}</p>
            </div>

            <div>{count}</div>

            <input
                value="+"
                type="button"
                onClick={() => {
                    setCount(count + 1)

                    updateAge(Object.assign(userInfo, { age: 11 }))
                }}
            />
        </div>
    );
}
