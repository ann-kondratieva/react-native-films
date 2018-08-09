import { handleActions } from 'redux-actions';

import filmActionCreators from '../../actions';

let initialState = false;

const loading = handleActions(
    {
        [filmActionCreators.getFilmRequest]: () => {
            return true;
        },
        [filmActionCreators.getFilmSuccess]: () => {
            return false;
        }
    },
    initialState
);

export default loading;