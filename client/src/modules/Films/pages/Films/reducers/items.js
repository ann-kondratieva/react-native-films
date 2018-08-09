import { handleActions } from 'redux-actions';

import filmsActionCreators from '../actions';

let initialState = [];

const items = handleActions(
    {
        [filmsActionCreators.getFilmsSuccess]: (state, action) => {
            let resultState = state;
            resultState.push(...action.response.films);
            return Array.from(resultState);
        },
        [filmsActionCreators.clearFilms]: () => {
            return [];
        }
    },
    initialState
);

export default items;