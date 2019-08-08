import React, {Component} from 'react';

class One extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        console.log('One didMount');
    }

    render() {
        return (
            <div>One</div>
        );
    }
}

export default One;
