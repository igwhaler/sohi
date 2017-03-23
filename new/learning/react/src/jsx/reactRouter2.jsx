import "../less/core.less";
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link} from 'react-router-dom';

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
        return (
            <div>
                <ul>
                    <li><Link to="/one">One</Link></li>
                    <li><Link to="/two">Two</Link></li>
                    <li><Link to="/three">Three</Link></li>
                </ul>
                {
                    this.props.children
                }
            </div>
        )
    }
});

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="one" componet={One} />
            <Route path="two" component={Two} />
            <Route path="three" componet={Three} />
        </Route>
    </Router>,
    document.body
);