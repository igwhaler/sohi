import React, {PureComponent} from 'react';

class One extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        // console.log('One didMount');
    }

    render() {
        console.log(this.props, 123);

        return (
            <div onClick={() => {
                this.props.history.push('/');
            }}>One</div>
        );
    }
}

export default One;
