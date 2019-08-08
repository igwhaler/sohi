import React, {Component} from 'react';

class Two extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        console.log('Two didMount');
    }

    render() {
        return (
            <div>Two</div>
        );
    }
}

export default Two;
