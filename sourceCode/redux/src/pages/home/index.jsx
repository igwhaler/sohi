import React, {PureComponent} from 'react';

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}

    render() {
        console.log(this.props, 123456);

        return (
            <div>123</div>
        );
    }
}

export default Home;
