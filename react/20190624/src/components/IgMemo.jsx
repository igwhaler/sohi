import React, {Component, memo} from 'react';

const TextDesc = memo(function(props) {
    console.log(props);

    return <div>{props.text}</div>
});

class IgMemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    componentDidMount() {}

    handleChange = ({target}) => {
        this.setState({
            text: target.value
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={(e) => this.handleChange(e)}/>

                <TextDesc text="123" />
            </div>
        );
    }
}

export default IgMemo;
