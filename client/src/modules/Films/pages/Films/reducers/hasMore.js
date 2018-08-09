import { handleActions } from 'redux-actions';

import filmsActionCreators from '../actions';

let initialState = true;

const hasMore = handleActions(
    {
        [filmsActionCreators.getFilmsSuccess]: (state, action) => {
            return !(action.response.films.length === 0);
        },
        [filmsActionCreators.setHasMore]: (state, action) => {
            return action.payload;
        }
    },
    initialState
);

export default hasMore;