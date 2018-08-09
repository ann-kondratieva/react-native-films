import { handleActions } from 'redux-actions';

import filmActionCreators from '../../actions';

let initialState = false;

const error = handleActions(
    {
        [filmActionCreators.getFilmError]: (state, action) => {
            return action.payload;
        }
    },
    initialState
);

export default error;