import { handleActions } from 'redux-actions';

import galleryActionCreators from '../actions';

let initialState = '';

const image = handleActions(
    {
        [galleryActionCreators.openImage]: (state, action) => {
            return action.payload;
        },
        [galleryActionCreators.closeImage]: () => {
            return initialState;
        }
    },
    initialState
);

export default image;