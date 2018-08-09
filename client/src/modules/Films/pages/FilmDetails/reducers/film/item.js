import { handleActions } from 'redux-actions';

import filmActionCreators from '../../actions';

let initialState = {};

const item = handleActions(
    {
        [filmActionCreators.getFilmSuccess]: (state, action) => {
            return action.response.film;
        },
        [filmActionCreators.updateFilmRatingSuccess]: (state, action) => {
            return action.response.film;
        },
        [filmActionCreators.updateFilmSuccess]: (state, action) => {
            return action.response.film;
        }
    },
    initialState
);

export default item;