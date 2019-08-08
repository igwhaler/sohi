import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import One from './modules/One';
import Two from './modules/Two';

export default class Hehe extends Component {
    componentDidMount() {
        console.log('Hehe didMount');
    }

    render() {
        return (
            <div>
                <p>呵呵</p>

                <div>
                    <div>
                        <Link to="/hehe/1">1</Link>
                    </div>
                    <div>
                        <Link to="/hehe/2">2</Link>
                    </div>
                </div>

                <div>
                    <Route path="/hehe/1" component={One} />
                    <Route path="/hehe/2" component={Two} />
                </div>
            </div>
        )
    }
}
