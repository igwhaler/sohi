import React, { useState, useEffect } from 'react';

const useLocalStorageState = ({
    key,
    initialValue,
    serialize = v => v,
    deserialize = v => v
}) => {
    const [state, setState] = useState(
        deserialize(window.localStorage.getItem(key)) || initialValue
    );

    const serializeState = serialize(state);

    useEffect(() => {
        window.localStorage.setItem(key, serializeState);
    }, [state, serializeState]);

    return [state, setState];
};

export default () => {
    const [state, setState] = useLocalStorageState({ key: 'a', initialValue: 4567 });
    const [value, setValue] = useState('');
    const [storageList, setStorageList] = useState([]);

    useEffect(() => {
        setStorageList(Object.entries(window.localStorage));
    }, [state]);

    return (
        <div>
            <div>
                key: <input type="text" readOnly disabled />
                value: <input type="text" value={value} onChange={e => { setValue(e.target.value); }} />
                <button onClick={() => {setState(value)}}>修改</button>
            </div>

            <p>storage: </p>
            {
                storageList.map(([key, value]) => (
                    <div key={key}>{key}: {value}</div>
                ))
            }
        </div>
    );
};
