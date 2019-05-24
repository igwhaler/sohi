import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {funcDocumentTitle} from '../../decorators/setDocumentTitle';
import log from '../../decorators/log';

class HomePage extends Component {
    state = {
        text: ''
    }

    @funcDocumentTitle('首页')
    componentDidMount() {}

    @log
    handleChange({target}) {
        this.setState({
            text: target.value
        });
    }

    render() {
        let {text} = this.state;

        return (
            <div>
                <h2>
                    <Link to="/todo">Todo</Link>
                </h2>

                <div>首页-大鱼你个锅锅</div>

                <p>
                    <input value={text} type="text" onChange={(e) => { this.handleChange(e) }} />
                </p>

                <p>{text}</p>
            </div>
        );
    }
}

export default HomePage;
