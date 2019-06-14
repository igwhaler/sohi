import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from '../pages/home';
import Todo from '../pages/todo';
import RichInput from '../pages/richInput';

export default class Layout extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/todo" exact component={Todo} />
                    <Route path="/richinput" exact component={RichInput} />
                </Switch>
            </Router>
        );
    }
}
