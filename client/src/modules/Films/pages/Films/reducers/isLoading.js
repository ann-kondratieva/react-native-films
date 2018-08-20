import { handleActions } from 'redux-actions';

import filmsActionCreators from '../actions';

let initialState = false;

const isLoading = handleActions(
    {
        [filmsActionCreators.getFilmsRequest]: () => {
            return true;
        },
        [filmsActionCreators.getFilmsSuccess]: () => {
            return false;
        }
    },
    initialState
);

export default isLoading;