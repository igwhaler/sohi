import React from "react"
import ReactDOM from "react-dom"
import {
    Router,
    Route,
    Link
} from "react-router"


const App = React.createClass({
    render() {
        return <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div>
                {this.props.children}
            </div>
        </div>
    }
})

const Home = React.createClass({
    render() {
        return <div>home123</div>
    }
})

const About = React.createClass({
    render() {
        return <div>about123</div>
    }
})

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="home" component={Home} />
            <Route path="about" component={About} />
        </Route>
    </Router>,
    document.body
)