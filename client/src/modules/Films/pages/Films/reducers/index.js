import { combineReducers } from 'redux';

import error from './error';
import items from './items';
import loading from './loading';
import hasMore from './hasMore';
import refreshing from './refreshing';

const filmList = combineReducers({
    error,
    items,
    loading,
    hasMore,
    refreshing
});

export default filmList;