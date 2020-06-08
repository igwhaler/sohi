import React, {PureComponent} from 'react';

class SelfState extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            person: {
                name: 1
            }
        };
    }

    componentDidMount() {}

    handleChangeNmae = () => {
        let { person } = this.state;

        person['name'] = 123;

        this.setState({
            person
        })
    }

    render() {
        let { person } = this.state;

        return (
            <div>
                <div>{person['name']}</div>
                <span onClick={this.handleChangeNmae}>hehe</span>
            </div>
        );
    }
}

export default SelfState;
