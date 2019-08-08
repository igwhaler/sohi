import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {fromJS} from 'immutable';
// import logger from 'redux-logger'
import {
    GET_USER_INFO,
    GET_USER_INFO_ING,
    GET_USER_INFO_ERR
} from './constants';

const userInfo = fromJS({
    isFetching: true,
    isFetchErr: false,
    data: {}
});

const reducer = (state = userInfo, action) => {
    let {type, payload = {}} = action;

    switch (type) {
        case GET_USER_INFO:
            return state.set('data', payload.data);
        case GET_USER_INFO_ING:
            return state.set('isFetching', payload.isFetching);
        case GET_USER_INFO_ERR:
            return state.set('isFetchErr', payload.isFetchErr);
        default:
            return state;
    }
}

export default createStore(
    reducer,
    applyMiddleware(/* logger,  */thunk)
);
