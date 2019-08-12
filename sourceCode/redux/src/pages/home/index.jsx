import React, {PureComponent} from 'react';
import LayoutHeader from '../../components/LayoutHeader';

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                <LayoutHeader name="啊实打实大"></LayoutHeader>

                <p>123</p>
            </div>
        );
    }
}

export default Home;
