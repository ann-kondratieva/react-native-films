import { combineReducers } from 'redux';

import error from './error';

const modal = combineReducers({
    error
});

export default modal;