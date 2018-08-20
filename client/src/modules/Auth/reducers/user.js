import { handleActions } from 'redux-actions';

import authActionCreators from '../actions';
import loginActionCreators from '../pages/Login/actions';
import registerActionCreators from '../pages/Register/actions';

let initialState = {};

const user = handleActions(
    {
        [authActionCreators.getUserRequest]: () => {
            return initialState;
        },
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
    },
    initialState
);

export default user;