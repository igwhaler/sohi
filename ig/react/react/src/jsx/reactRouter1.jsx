import "../less/core.less";
import React from "react";
import ReactDOM from "react-dom";

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
    getInitialState() {
        return {
            route: window.location.hash.substr(1)
        }
    },

    componentDidMount() {
        let _this = this;
        window.addEventListener("hashchange", () => {
            _this.setState({
                route: window.location.hash.substr(1)
            })
        }, false)
    },

    render() {
        let [state, Child] = [this.state]
        switch(state.route) {
            case "one":
            Child = One;
            break;
            case "two":
            Child = Two;
            break;
            case "three":
            Child = Three;
            break;
            default:
            Child = One;
        }

        return <div>
            <ul>
                <li><a href="#one">One</a></li>
                <li><a href="#two">Two</a></li>
                <li><a href="#three">Three</a></li>
            </ul>
            <div>
                <Child />
            </div>
        </div>
    }
});

ReactDOM.render(
    <App />,
    document.body
);