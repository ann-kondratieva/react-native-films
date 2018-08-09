import { handleActions } from 'redux-actions';

import loginActionCreators from '../pages/Login/actions';
import registerActionCreators from '../pages/Register/actions';
import authActionCreators from '../actions';

let initialState = null;

const token = handleActions(
    {
        [loginActionCreators.loginSuccess]: (state, action) => {
            return action.response.token;
        },
        [registerActionCreators.registerSuccess]: (state, action) => {
            return action.response.token;
        },
        [authActionCreators.logout]: () => {
            return initialState;
        }
    },
    initialState
);

export default token;