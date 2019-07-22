import React, {useState, useEffect, Component} from 'react';
import { Button } from 'antd';

function useFriendStatus(id) {
    const [status, changeStatus] = useState(null);

    useEffect(() => {
        console.log('useEffect status');

        setTimeout(() => {
            changeStatus(true);
        }, 3000)
    }, [id]);

    console.log(status);

    return status;
}

function FuncOne(props) {
    let {name} = props;
    let [count, incrementCount] = useState(0);
    let stauts = useFriendStatus(1);

    // console.log(count, props);

    useEffect(() => {
        console.log('useEffect 1');

        document.title = `${name}`;

        return () => {
            console.log('useEffect 2');
        }
    }, [name]);

    return (
        <div>
            <p>{name}</p>
            <div>{count}</div>
            <div>{stauts ? '在线' : '离线'}</div>
            <Button
                type="primary"
                onClick={() => { incrementCount(++ count); }}
            >
                +
            </Button>
            <span>  </span>
            <Button
                type="primary"
                onClick={() => { incrementCount(-- count); }}
            >
                -
            </Button>
        </div>
    );
}

class MyFriends extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                <FuncOne></FuncOne>
            </div>
        );
    }
}


// export default FuncOne;
export default MyFriends;
