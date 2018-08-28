import { handleActions } from 'redux-actions';

import filmActionCreators from '../actions';

let initialState = false;

const isRefreshingComments = handleActions(
    {
        [filmActionCreators.startRefreshingComments]: () => {
            return true;
        },
        [filmActionCreators.getFilmSuccess]: () => {
            return false;
        }
    },
    initialState
);

export default isRefreshingComments;