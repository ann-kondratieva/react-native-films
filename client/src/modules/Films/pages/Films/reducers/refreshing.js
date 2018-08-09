import { handleActions } from 'redux-actions';

import filmsActionCreators from '../actions';

let initialState = true;

const refreshing = handleActions(
    {
        [filmsActionCreators.startRefreshing]: () => {
            return true;
        },
        [filmsActionCreators.getFilmsSuccess]: () => {
            return false;
        }
    },
    initialState
);

export default refreshing;