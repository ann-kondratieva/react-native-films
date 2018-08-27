import { combineReducers } from 'redux';

import isRefreshing from './isRefreshing';

const profile = combineReducers({
    isRefreshing
});

export default profile;