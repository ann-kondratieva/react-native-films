import { combineReducers } from 'redux';

import token from './token';
import user from './user';
import error from './error';

const auth = combineReducers({
    token,
    user,
    error
});

export default auth;

