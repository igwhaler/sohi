

import React, { PureComponent, memo } from 'react';

const shallowEqual = () => {}

const CpF = memo((props) => {
    console.log('CpF', props);

    return (
        <>
            <div>{props.name}</div>
        </>
    );
}, (prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
})

class CpA extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                name: 'hehe'
            }
        };

        this.handleChangeValue = this.handleChangeValue.bind(this);
    }


    componentDidMount() {}


    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }

    handleChangeValue() {}

    handleChange = () => {}


    render() {
        let { data } = this.state;

        return (
            <div>

                <CpF onChange={this.handleChange} />
                <CpF onChange={() => {}} />
                <CpF onChange={this.handleChangeValue.bind(this)} />

                <div>{data.name}</div>
            </div>
        );
    }
}

export default CpA;



/* class ShallowEqual extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 1,
            data: {
                name: 'cpa1'
            }
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.b !== this.props.b || nextState.a !== this.state.a;
    }


    componentDidMount() { }

    handleChange = () => {
        let { data } = this.state;

        data.name = 'cpa2';

        this.setState({
            // name: 2,
            data: {
                name: 'cpa2'
            }
        })
    }

    render() {
        let { name, data } = this.state;

        console.log('ShallowEqual', data);

        return (
            <div>
                <div>
                    <button onClick={this.handleChange}>哈哈</button>
                    <p>{name}</p>
                </div>

                <CpA data={data} />
            </div>
        );
    }
} */

// export default ShallowEqual;
