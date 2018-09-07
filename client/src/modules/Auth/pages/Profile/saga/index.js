import { takeEvery, all, put, call } from 'redux-saga/effects';

import profileActionCreators from '../actions';
import modalActionCreators from '../../../../../components/Modal/actions';
import { firebase, uploadToCloud } from '../../../../../services/firebase';

const updateError = function* (action) {
    const { error } = action;
    yield put(modalActionCreators.openModal(error));
};

const uploadAvatar = function* (action) {
    const { uri, user, fileName, type } = action.payload;
    const { updateUserRequest, startUploadingImage } = profileActionCreators;
    yield put(startUploadingImage(uri));
    const downloadURL = yield call(uploadToCloud, { uri, user, fileName, type });
    user.avatar = downloadURL;
    yield put(updateUserRequest({ user }));
};

const profileSaga = function* () {
    yield all([
        takeEvery(profileActionCreators.updateUserError, updateError),
        takeEvery(profileActionCreators.uploadAvatar, uploadAvatar),
    ]);
};

export default profileSaga;
