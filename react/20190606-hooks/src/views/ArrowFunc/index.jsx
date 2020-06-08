import React, { Component, PureComponent } from 'react';

class ChildFunc extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}

    render() {
        console.log('ChildFunc');

        return (
            <div>ChildFunc</div>
        );
    }
}


class ArrowFunc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    componentDidMount() { }

    increaseCount = () => {
        let { count } = this.state;

        this.setState({
            count: count + 1
        });

        return () => { };
    }

    handleFunc = () => {
        return () => {};
    }

    render() {
        let { count } = this.state;

        return (
            <div className="arrow-func">
                <div>{count}</div>
                <button onClick={this.increaseCount}>+</button>

                <div>
                    <ChildFunc onChange={this.handleFunc} />
                </div>
            </div>
        );
    }
}

export default ArrowFunc;
