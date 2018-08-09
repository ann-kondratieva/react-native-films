import { combineReducers } from 'redux';

import film from './film';
//import gallery from '../components/Gallery/reducers';
import isLoadingRating from './isLoadingRating';

const filmDetails = combineReducers({
    film,
    isLoadingRating
    /* gallery,
    rating,
    info */
});

export default filmDetails;