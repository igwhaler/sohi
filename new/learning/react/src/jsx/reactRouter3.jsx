import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, Link} from "react-router"

var Home = React.createClass({
    render() {
        return <div>123</div>
    }
})

/*ReactDOM.render(
    <Home/>,
    document.getElementById('container')
)*/

ReactDOM.render(
    <Router>
        <Route path="/" component={Home}></Route>
    </Router>,
    document.getElementById('container')
)

function r1(str, times) {
    var oStr;
    times--;
    if(times < 1) {
        return str;
    }
    oStr = str + r1(str, times);
    return oStr;
}

function r2(str, times) {
    times--;
    if(times < 1) {
        return str;
    }
    return str + r2(str, times);
}

console.log(r1('a', 30000));
console.log(r2('a', 30000));

/*
'a' + r('a', 2);
'a' + 'a' + r('a', 1)
'a' + 'a' + 'a' + r('a', 0)
*/
