import { handleActions } from 'redux-actions';

import addFilmActionCreators from '../actions';

let initialState = null;

const image = handleActions(
    {
        [addFilmActionCreators.addImage]: (state, action) => {
            return action.payload;
        },
        [addFilmActionCreators.saveFilmsSuccess]: () => {
            return null;
        },
    },
    initialState
);

export default image;