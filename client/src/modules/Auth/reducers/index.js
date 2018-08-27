import { combineReducers } from 'redux';

import token from './token';
import user from './user';
import profile from '../pages/Profile/reducers';

const auth = combineReducers({
    token,
    user,
    profile
});

export default auth;

