import { combineReducers } from 'redux';

import image from './image';
import isOpen from './isOpen';

const gallery = combineReducers({
    image,
    isOpen
});

export default gallery;