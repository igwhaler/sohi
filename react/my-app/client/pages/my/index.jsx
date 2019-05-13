import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class My extends Component {
    render() {
        return (
            <div className="My">
                <p>my</p>
                <Link to="/">/</Link>
            </div>
        );
    }
}

export default withRouter(My);
