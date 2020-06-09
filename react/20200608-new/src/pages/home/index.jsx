import React, {PureComponent} from 'react';
import Axios from 'axios';

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        Axios.get('/builderinner/mobileui/mainpage/brandAuthor', {
            params: {
                'app_os': 'wap'
            }
        }).then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <div>首页</div>
        );
    }
}

export default Home;
