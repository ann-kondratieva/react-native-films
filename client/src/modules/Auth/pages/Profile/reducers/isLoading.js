import { handleActions } from 'redux-actions';

import profileActionCreators from '../actions';

let initialState = false;

const isLoading = handleActions(
    {
        [profileActionCreators.updateUserRequest]: () => {
            return true;
        },
        [profileActionCreators.startUploadingImage]: () => {
            return true;
        },
        [profileActionCreators.endUploadingImage]: () => {
            return false;
        },

    },
    initialState
);

export default isLoading;