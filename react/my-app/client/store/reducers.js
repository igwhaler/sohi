import { combineReducers } from 'redux';
import home from './home/reducer'

const initialState = {};

const initial = (state = initialState, action) => {
    return state
}

export default combineReducers({
    initial,
    home
});
