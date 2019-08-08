import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {getUserInfo} from './store/actions';
import Home from './pages/home/index.jsx';

class App extends PureComponent {
    componentDidMount() {
        this.props.dispatch(getUserInfo());
    }

    componentDidUpdate() {
        // console.log(this.props);
    }

    render() {
        let {isFetching} = this.props;

        return (
            <div className="App">
                {
                    isFetching
                    ? <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                    : '哈哈哈'
                }

                <Home />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    state = state.toJS();

    return {
        userInfo: state.data,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps)(App);
