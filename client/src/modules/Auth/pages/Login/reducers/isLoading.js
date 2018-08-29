import { handleActions } from 'redux-actions';

import loginActionCreators from '../actions';
import authActionCreators from '../../../actions';

let initialState = false;

const isLoading = handleActions(
    {
        [loginActionCreators.loginSuccess]: (state, action) => {
            return false;
        },
        [loginActionCreators.loginRequest]: (state, action) => {
            return true;
        },
        [authActionCreators.authError]: (state, actions) => {
            return false;
        }
    },
    initialState
);

export default isLoading;