import "../less/core.less";
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, history} from 'react-router';

const One = React.createClass({
    render() {
        return <h1>One</h1>
    }
});
const Two = React.createClass({
    render() {
        return <h2>Two</h2>
    }
});
const Three = React.createClass({
    render() {
        return <h3>Three</h3>
    }
});

const App = React.createClass({
    render() {
        var _this = this;
        return (
            <div>
                <ul>
                    <li><Link to="/one">On</Link></li>
                    <li><Link to="/two">Tw</Link></li>
                    <li><Link to="/three">Thre</Link></li>
                </ul>
                {_this.props.children}
            </div>
        )
    }
});

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="one" component={One} />
            <Route path="two" component={Two} />
            <Route path="three" component={Three} />
        </Route>
    </Router>,
    document.body
);