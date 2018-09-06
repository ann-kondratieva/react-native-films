import { handleActions } from 'redux-actions';

import authActionCreators from '../actions';
import loginActionCreators from '../pages/Login/actions';
import registerActionCreators from '../pages/Register/actions';
import profileActionCreators from '../pages/Profile/actions';

let initialState = {};

const user = handleActions(
    {
        [authActionCreators.getUserSuccess]: (state, action) => {
            return action.response;
        },
        [authActionCreators.getUserError]: (error) => {
            return error;
        },
        [authActionCreators.logout]: () => {
            return initialState;
        },
        [loginActionCreators.loginSuccess]: (state, action) => {
            return action.response.user;
        },
        [registerActionCreators.registerSuccess]: (state, action) => {
            return action.response.newUser;
        },
        [profileActionCreators.updateUserSuccess]: (state, action) => {
            return action.response.user;
        },
    },
    initialState
);

export default user;