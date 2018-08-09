import { combineReducers } from 'redux';

import filmList from '../pages/Films/reducers';
import filmDetails from '../pages/FilmDetails/reducers';

const films = combineReducers({
    filmList,
    filmDetails
});

export default films;