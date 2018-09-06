import { handleActions } from 'redux-actions';

import profileActionCreators from '../actions';

let initialState = '';

const imageLoader = handleActions(
    {
        [profileActionCreators.startUploadingImage]: (state, action) => {
            return action.payload;
        },
        [profileActionCreators.endUploadingImage]: () => {
            return '';
        },
    },
    initialState
);

export default imageLoader;