import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from 'antd-mobile';
import * as homeActions from '@store/home/action';
import styles from './index.module.less';
import _ from 'lodash';

var a = { a: 123 };

console.log(_.cloneDeep(a));

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        console.log(this);
    }

    increaseCount = () => {
        this.props.dispatch(homeActions.handleIncreaseNum());
    }

    decreaseCount = () => {
        this.props.dispatch(homeActions.handleDecreaseNum());
    }

    render() {
        return (
            <div className={styles.home}>
                <p className={styles.text}>home</p>

                <Link to='my'>my</Link>

                <div>
                    <p>{this.props.num}</p>
                    <Button type="primary" onClick={this.increaseCount}>+</Button>
                    <p></p>
                    <Button type="primary" onClick={this.decreaseCount}>-</Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ home }) => {
    return {
        num: home.num
    };
};

export default connect(mapStateToProps)(Home);
