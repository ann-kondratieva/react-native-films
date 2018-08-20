import { handleActions } from 'redux-actions';

import filmActionCreators from '../actions';

let initialState = false;

const isRefreshing = handleActions(
    {
        [filmActionCreators.startRefreshing]: () => {
            return true;
        },
        [filmActionCreators.getFilmSuccess]: () => {
            return false;
        }
    },
    initialState
);

export default isRefreshing;