import React, {Component} from 'react';

export default class Arrow extends Component {
    handleClick1 = () => {
        console.log(this);

        // let {handleClick2} = this;

        // handleClick2();
    }

    handleClick2() {
        // console.log(this);

        let {handleClick1} = this;

        handleClick1();
    }

    handleClick3 = () => {
        // console.log(this);

        let {handleClick1} = this;

        handleClick1();
    }

    render() {
        console.log(this);

        let {handleClick3} = this;

        handleClick3();

        return (
            <div>
                <div onClick={this.handleClick1}>哈哈哈哈1</div>

                <div onClick={this.handleClick2}>哈哈哈哈2</div>
            </div>
        );
    }
}