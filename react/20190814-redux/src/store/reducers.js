import {
    GET_USER_INFO,
    GET_USER_INFO_ING,
    GET_USER_INFO_ERR
} from './constants';



// immutable
import {fromJS} from 'immutable';
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

// obj
/* const userInfo = {
    isFetching: true,
    isFetchErr: false,
    data: {}
}

const reducer = (state = userInfo, action) => {
    let {type, payload = {}} = action;

    switch (type) {
        case GET_USER_INFO:
            return Object.assign({}, state, {data: payload.data});
        case GET_USER_INFO_ING:
            return Object.assign({}, state, {isFetching: payload.isFetching});
        case GET_USER_INFO_ERR:
            return Object.assign({}, state, {isFetchErr: payload.isFetchErr});
        default:
            return state;
    }
} */


export default reducer;
