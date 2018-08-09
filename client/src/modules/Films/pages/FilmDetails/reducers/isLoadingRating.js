import { handleActions } from 'redux-actions';

import ratingActionCreators from '../actions';

let initialState = false;

const isLoadingRating = handleActions(
    {
        [ratingActionCreators.updateFilmRatingRequest]: () => {
            return true;
        },
        [ratingActionCreators.updateFilmRatingSuccess]: () => {
            return false;
        }
    },
    initialState
);

export default isLoadingRating;