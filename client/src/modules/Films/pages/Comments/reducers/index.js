import { combineReducers } from 'redux';

import isRefreshing from './isRefreshing';

const comments = combineReducers({
    isRefreshing
});

export default comments;