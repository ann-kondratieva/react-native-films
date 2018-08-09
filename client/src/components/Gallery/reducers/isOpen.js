import { handleActions } from 'redux-actions';

import galleryActionCreators from '../actions';

let initialState = false;

const isOpen = handleActions(
    {
        [galleryActionCreators.openImage]: () => {
            return true;
        },
        [galleryActionCreators.closeImage]: () => {
            return false;
        }
    },
    initialState
);

export default isOpen;