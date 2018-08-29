import { combineReducers } from 'redux';

import isLoading from './isLoading';

const register = combineReducers({
    isLoading
});

export default register;