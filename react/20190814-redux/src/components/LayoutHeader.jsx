import React, {Component} from 'react';

class LayoutHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick = () => {
        console.log(123);
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.props.name}</div>
        );
    }
}

export default LayoutHeader;
