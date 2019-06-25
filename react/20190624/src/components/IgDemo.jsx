import React, {Component} from 'react';

class IgDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        // console.log(a);
    }

    render() {
        return (
            [
                <div key="123">a</div>,
                123,
                true ? 'a' : 'b',
                undefined,
                123
            ]
        );
    }
}

export default IgDemo;
