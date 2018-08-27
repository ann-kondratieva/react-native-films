import { handleActions } from 'redux-actions';

import profileActionCreators from '../actions';
import authActionCreators from '../../../actions';

let initialState = false;

const isRefreshing = handleActions(
    {
        [profileActionCreators.startRefreshing]: () => {
            return true;
        },
        [authActionCreators.getUserSuccess]: () => {
            return false;
        }
    },
    initialState
);

export default isRefreshing;