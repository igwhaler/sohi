import React, {useState} from 'react';

function FuncTwo(props) {
    let {name} = props;
    let [count, incrementCount] = useState(0);

    console.log(count, props);

    return (
        <div>
            <p>{name}</p>
            <div>{count}</div>
            <span onClick={() => { incrementCount(++ count); }}>+</span>
        </div>
    );
}

export default FuncTwo;
