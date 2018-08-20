import { combineReducers } from 'redux';

import error from './error';
import items from './items';
import isLoading from './isLoading';
import hasMore from './hasMore';
import isRefreshing from './isRefreshing';
import isSearching from './isSearching';

const filmList = combineReducers({
    error,
    items,
    isLoading,
    hasMore,
    isRefreshing,
    isSearching
});

export default filmList;