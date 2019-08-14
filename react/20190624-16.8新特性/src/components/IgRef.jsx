import React, {Component} from 'react';

const TextInput = React.forwardRef((props, ref) => {
    return <input ref={ref} />;
});

class IgRef extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.igRef = React.createRef();
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.igRef.current)
    }

    handleClick = () => {
        console.log(this.inputRef.current.value);
    }

    render() {
        return (
            <div ref={this.igRef}>
                <TextInput ref={this.inputRef} />
                <input type="button" value="点击" onClick={this.handleClick}/>
            </div>
        );
    }
}

export default IgRef;
