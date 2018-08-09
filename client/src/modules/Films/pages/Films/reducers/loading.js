import { handleActions } from 'redux-actions';

import filmsActionCreators from '../actions';

let initialState = false;

const loading = handleActions(
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

export default loading;