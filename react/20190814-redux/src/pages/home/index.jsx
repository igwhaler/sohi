import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {updateUserInfo} from '../../store/actions';
import LayoutHeader from '../../components/LayoutHeader';

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            obj: {
                count: 0
            }
        };
    }

    componentDidMount() {
        // console.log(this.props);
    }

    handleOnclick = () => {
        this.props.dispatch(updateUserInfo({a: 123}));

        /* let {obj} = this.state;

        obj.count = obj.count + 1;

        this.setState({
            obj: {
                ...obj
            }
        }) */
    }

    render() {
        console.log('Home render')

        return (
            <div>
                <LayoutHeader name="啊实打实大"></LayoutHeader>

                <p onClick={this.handleOnclick}>+</p>
                <p>{this.state.obj.count}</p>
            </div>
        );
    }
}

export default connect()(Home)

// export default Home;
