import { handleActions } from 'redux-actions';

import filmsActionCreators from '../actions';

let initialState = false;

const error = handleActions(
    {
        [filmsActionCreators.getFilmsError]: (state, action) => {
            return action.payload;
        }
    },
    initialState
);

export default error;