import { combineReducers } from 'redux';

import error from './error';
import item from './item';
import loading from './loading';

const film = combineReducers({
    error,
    item,
    loading
});

export default film;