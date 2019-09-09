import React, {useState, memo, useEffect} from 'react';

const SelfCount = memo((props) => {
    const [count, setCount] = useState(0);

    // console.log(props);

    return (
        <div>
            <p>number: {props.number}</p>

            <p>count: {count}</p>

            <div>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
});

const SelfEffect = () => {
    const [number, setNumber] = useState(0);
    const [textValue, SetTextValue] = useState('');

    console.log(number);

    useEffect(() => {
        console.log('effect');

        setNumber(value => {
            return value + 1;
        });

        return () => {
            console.log('cleanup');
        };
    }, [textValue]);

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        setNumber(number + 1);
                    }}
                >
                    +
                </button>
            </div>

            <div>
                <input
                    type="text"
                    value={textValue}
                    onChange={(e) => {
                        SetTextValue(e.target.value);
                    }}
                />
            </div>

            <SelfCount number={number}></SelfCount>
        </div>
    );
};

export default SelfEffect;
