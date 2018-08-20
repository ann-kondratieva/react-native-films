import { handleActions } from 'redux-actions';

import filmsActionCreators from '../actions';

let initialState = false;

const isSearching = handleActions(
    {
        [filmsActionCreators.openSearch]: () => {
            return true;
        },
        [filmsActionCreators.closeSearch]: () => {
            return false;
        }
    },
    initialState
);

export default isSearching;