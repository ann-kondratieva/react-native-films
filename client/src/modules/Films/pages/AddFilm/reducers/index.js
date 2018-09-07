import { combineReducers } from 'redux';

import image from './image';
import isLoading from './isLoading';

const addFilm = combineReducers({
    image,
    isLoading
});

export default addFilm;