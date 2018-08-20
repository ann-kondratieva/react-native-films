import { combineReducers } from 'redux';

import film from './film';
//import gallery from '../components/Gallery/reducers';
import isLoadingRating from './isLoadingRating';
import isRefreshing from './isRefreshing';
import comments from '../../Comments/reducers';

const filmDetails = combineReducers({
    film,
    isLoadingRating,
    isRefreshing,
    comments
});

export default filmDetails;