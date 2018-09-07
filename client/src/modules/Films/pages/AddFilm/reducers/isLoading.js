import { handleActions } from 'redux-actions';

import addFilmActionCreators from '../actions';

let initialState = false;

const isLoading = handleActions(
    {
        [addFilmActionCreators.saveFilmsRequest]: () => {
            return true;
        },
        [addFilmActionCreators.redirect]: () => {
            return false;
        },
    },
    initialState
);

export default isLoading;