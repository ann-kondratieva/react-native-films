import { combineReducers } from 'redux';

import film from './film';
//import gallery from '../components/Gallery/reducers';
import isLoadingRating from './isLoadingRating';
import isRefreshing from './isRefreshing';
import comments from '../../Comments/reducers';
import isRefreshingComments from './isRefreshingComments';

const filmDetails = combineReducers({
    film,
    isLoadingRating,
    isRefreshing,
    comments,
    isRefreshingComments
});

export default filmDetails;