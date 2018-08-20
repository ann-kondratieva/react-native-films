import { handleActions } from 'redux-actions';

import commentsActionCreators from '../actions';
import filmActionCreators from '../../FilmDetails/actions';

let initialState = false;

const isRefreshing = handleActions(
    {
        [commentsActionCreators.startRefreshing]: () => {
            return true;
        },
        [filmActionCreators.getFilmSuccess]: () => {
            return false;
        }
    },
    initialState
);

export default isRefreshing;