import { combineReducers } from 'redux';

import filmList from '../pages/Films/reducers';
import filmDetails from '../pages/FilmDetails/reducers';
import addFilm from '../pages/AddFilm/reducers';

const films = combineReducers({
    filmList,
    filmDetails,
    addFilm
});

export default films;