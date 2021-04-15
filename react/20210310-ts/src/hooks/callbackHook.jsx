import React, {useState, useCallback, memo} from 'react';

function SelfResult({ onSetCount }) {
    console.log(123);

    return (
        <div>
            <input
                type="number"
                onChange={e => {
                    onSetCount(e.target.value);
                }}
            />
        </div>
    );
}

const MemoSelfResult = memo(SelfResult);

function CallbackHook() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(10);

    const onSetCount = useCallback(value => {
        setCount(value, name);
    }, [name]);

    return (
        <div>
            <p>姓名：{name}</p>

            <input
                type="text"
                placeholder="姓名"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />

            <p>收入：{count}</p>

            <MemoSelfResult onSetCount={onSetCount} />
        </div>
    )
}

export default CallbackHook;
