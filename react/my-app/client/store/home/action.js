import {
    HOME_INCREASE_NUM,
    HOME_DECREASE_NUM
} from './constants';

export const handleIncreaseNum = () => {
    return {
        type: HOME_INCREASE_NUM
    };
};

export const handleDecreaseNum = () => {
    return {
        type: HOME_DECREASE_NUM
    };
};
