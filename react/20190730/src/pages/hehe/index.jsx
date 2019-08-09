import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import One from './modules/One';
import Two from './modules/Two';

export default class Hehe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        };
    }

    handleIncrease = () => {
        this.setState((preState) => ({
            count: preState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <p>呵呵</p>

                <span onClick={this.handleIncrease}>+</span>
                <p>{this.state.count}</p>

                <div>
                    <div>
                        <Link to="/hehe/1">1</Link>
                    </div>
                    <div>
                        <Link to="/hehe/2">2</Link>
                    </div>
                </div>

                <div>
                    <Route path="/hehe/1" render={() => <One {...this.props}></One>} />

                    <Route path="/hehe/2" component={Two} />
                </div>
            </div>
        )
    }
}
