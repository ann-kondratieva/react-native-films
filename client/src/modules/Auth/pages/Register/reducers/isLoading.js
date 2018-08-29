import { handleActions } from 'redux-actions';

import authActionCreators from '../../../actions';
import registerActionCreators from '../actions';

let initialState = false;

const isLoading = handleActions(
    {
        [registerActionCreators.registerSuccess]: (state, action) => {
            return false;
        },
        [registerActionCreators.registerRequest]: (state, action) => {
            return true;
        },
        [authActionCreators.authError]: (state, actions) => {
            return false;
        }
    },
    initialState
);

export default isLoading;