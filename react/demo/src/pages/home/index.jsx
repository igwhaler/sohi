import React, {Component, PureComponent} from 'react';

class UserName extends Component {
    render() {
        return (
            <span>{this.props.name}</span>
        );
    }
}

class UserAge extends Component {
    render() {
        return (
            <span>{this.props.age}</span>
        );
    }
}

class UserInfo extends PureComponent {
    render () {
        let {info} = this.props;

        return (
            <p>
                <UserName name={info.name}></UserName>
                <UserAge age={info.age}></UserAge>
            </p>
        )
    }
}

class SelfUserInfo extends Component {
    render () {
        let {info} = this.props;

        return (
            <p>
                <UserName name={info.name}></UserName>
                <UserAge age={info.age}></UserAge>
            </p>
        )
    }
}

export default class HomePage extends Component {
    state = {
        info: {
            name: '哈哈',
            age: 17
        }
    }

    handleName = ({target}) => {
        let {info} = this.state;

        info.name = target.value;

        /* this.setState(preState => {
            preState['info'] = {...info}

            return preState;
        }) */

        this.setState({info})
    }

    render () {
        let {info} = this.state;

        return (
            <div>
                <div>
                    名字：<input type="text" onInput={this.handleName}/>
                </div>

                <UserInfo info={info}></UserInfo>

                <SelfUserInfo info={info}></SelfUserInfo>
            </div>
        );
    }
}
