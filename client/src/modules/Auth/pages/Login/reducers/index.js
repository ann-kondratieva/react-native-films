import { combineReducers } from 'redux';

import isLoading from './isLoading';

const login = combineReducers({
    isLoading
});

export default login;