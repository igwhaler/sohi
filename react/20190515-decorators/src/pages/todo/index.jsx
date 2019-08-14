import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import setDocumentTitle from '../../decorators/setDocumentTitle';

@setDocumentTitle('todo')
@withRouter
class Todo extends Component {
    componentDidMount() {
        console.log(this);
    }

    render() {
        return (
            <div>
                <h2>
                    <Link to="/">首页</Link>
                </h2>

                <p>todo</p>
            </div>
        );
    }
}

export default Todo;
