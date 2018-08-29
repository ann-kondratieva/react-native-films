import { combineReducers } from 'redux';

import token from './token';
import user from './user';
import profile from '../pages/Profile/reducers';
import login from '../pages/Login/reducers';
import register from '../pages/Register/reducers';

const auth = combineReducers({
    token,
    user,
    profile,
    login,
    register
});

export default auth;

