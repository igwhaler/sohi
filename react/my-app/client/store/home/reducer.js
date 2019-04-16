import {
    HOME_INCREASE_NUM,
    HOME_DECREASE_NUM
} from './constants';

const homeState = {
    num: 0
};

const homeReducer = (state = homeState, action) => {
    switch (action.type) {
    case HOME_INCREASE_NUM:
        return {
            num: state.num + 1
        };

    case HOME_DECREASE_NUM:
        return {
            num: state.num - 1
        };

    default:
        return state;
    }
};

export default homeReducer;
