import React, { Component } from 'react'

export default class demo extends Component {
    constructor() {
        super();

        this.state = { num: 1 };
    }

    componentDidMount() {
        setTimeout(() => {

        }, 0);

        Promise.resolve().then(() => {
            this.batchUpdate();
        });

        // this.batchUpdate();
    }

    batchUpdate = () => {
        this.setState({
            num: this.state.num + 1
        });

        this.setState((prevState => {
            console.log(prevState);
            return {
                num: 4
            }
        }));

        /* this.setState({
            num: 3
        }); */

        this.setState({
            num: this.state.num + 1
        });

        console.log(this.state.num);
    }

    render() {
        console.log('render', this.state.num);

        return (
            <div>

            </div>
        )
    }
}
