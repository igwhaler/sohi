import React, { useState, useEffect } from 'react';

function EffectHook() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log(123);
        document.title = count1;
    })

    return (
        <div>
            <p>{count1}</p>
            <button onClick={() => {
                setCount1(count1 + 1);
            }}>点击cout1</button>

            <button onClick={() => {
                setCount2(count2 + 1);
            }}>点击cout2</button>
        </div>
    );
}

export default EffectHook;