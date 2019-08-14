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

    render() {
        let {userInfo, isFetching} = this.props;

        console.log('App render', userInfo, isFetching);

        return (
            <div className="App">
                {
                    isFetching
                    ? 'loading'
                    : <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                }

                <Home />
            </div>
        );
    }

}

const mapStateToProps = (state) => {

    // state = state.toJS();
    return {
        userInfo: state.get('data'),
        isFetching: state.get('isFetching')
    }

    /* return {
        userInfo: state.data,
        isFetching: state.isFetching
    } */
}

export default connect(mapStateToProps)(App);
