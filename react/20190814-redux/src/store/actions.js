import Axios from 'axios';
import {
    GET_USER_INFO,
    GET_USER_INFO_ING,
    GET_USER_INFO_ERR
} from './constants';

export const updateFetching = (status) => {
    return {
        type: GET_USER_INFO_ING,
        payload: {
            isFetching: !!status
        }
    }
};

export const updateFetchErr = (status) => {
    return {
        type: GET_USER_INFO_ERR,
        payload: {
            isFetchErr: !!status
        }
    }
};

export const updateUserInfo = (data) => {
    return {
        type: GET_USER_INFO,
        payload: {
            data: data || {}
        }
    }
}


export const getUserInfo = (params) => {
    return (dispatch, getState) => {
        Axios.get('/builder/app/appinfo').then(res => {
            let {data} = res || {};

            if (data && data.errno === 0) {
                dispatch(updateUserInfo(data.data))
            }
        }).catch(err => {
            dispatch(updateFetchErr(true));
        }).finally(res => {
            dispatch(updateFetching(false));
        })
    }
}
