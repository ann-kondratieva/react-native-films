import { combineReducers } from 'redux';

import isRefreshing from './isRefreshing';
import isLoading from './isLoading';
import imageLoader from './imageLoader';

const profile = combineReducers({
    isRefreshing,
    isLoading,
    imageLoader
});

export default profile;