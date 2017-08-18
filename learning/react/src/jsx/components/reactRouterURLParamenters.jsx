import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router, Route, Link
} from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/a">A</Link></li>
                <li><Link to="/b">B</Link></li>
                <li><Link to="/c">C</Link></li>
            </ul>
            <div>
                <Route path="/:id" component={AppChild} />
            </div>
        </div>
    </Router>
)

const AppChild = ({match}) => (
    <div>
        <h2>ID: {match.params.id}</h2>
    </div>
)

ReactDOM.render(
    <App />,
    document.body
)