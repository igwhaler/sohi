import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">exact</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topic">Topic</Link></li>
            </ul>
            <div>
                <Route path="/" component={Exact} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topic" component={Topic} />
            </div>
        </div>
    </Router>
)


const Exact = () => (
    <div>
        <h2>Exact</h2>
    </div>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)



const Topic = ({match}) => {
    let des = ["rendering", "components", "props-v-state"];
    let url = match.url;
    return <div>
            <h2>Topic</h2>
            <ul>
                {
                    des.map((value) => (
                        <li>
                            <Link to={`${url}/${value.toUpperCase()}`}>
                                {value}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <Route path={`${url}/:topicId`} component={TopicItem} />
            <Route exact path={url} render={() => (
                <h3>Please select a topic.</h3>
            )} />
        </div>
}

const TopicItem = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

ReactDOM.render(
    <BasicExample />,
    document.body
)