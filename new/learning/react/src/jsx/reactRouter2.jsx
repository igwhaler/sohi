import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
)

const One = () => (
    <div>
        <h1>one</h1>
    </div>
)

const Two = ({match}) => (
    <div>
        <h1>Two</h1>
        <ul>
            <li><Link to={`${match.url}/two_1`}>哈哈</Link></li>
            <li><Link to={`${match.url}/two_2`}>呵呵</Link></li>
        </ul>
        <div>
            <Route path={`${match.url}/:twoItem`} component={TwoItem} />
            <Route exact path={match.url} render={()=>(
                <h3>123123</h3>
            )} />
        </div>
    </div>
)

const TwoItem = ({match}) => (
    <div>
        <h2>{match.params.twoItem}</h2>
    </div>
)

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/one">One</Link></li>
                <li><Link to="/two">Two</Link></li>
            </ul>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/one" component={One} />
                <Route path="/two" component={Two} />
            </div>
        </div>
    </Router>
)

ReactDOM.render(
    <App />,
    document.body
)