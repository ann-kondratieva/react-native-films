import { takeEvery, all, put, call } from 'redux-saga/effects';
import RNFetchBlob from 'rn-fetch-blob';

import profileActionCreators from '../actions';
import modalActionCreators from '../../../../../components/Modal/actions';
import { firebase, reduxSagaFirebase } from '../../../../../services/firebase';

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

const uploadToCloud = function* (props) {
    const { uri, user, fileName, type } = props;
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    const trueXMLHttpRequest = window.XMLHttpRequest;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;
    const storage = firebase.storage();
    const imageRef = storage.ref(user._id).child(fileName);
    const data = yield call(fs.readFile, uri, 'base64');
    const blob = yield call(Blob.build, data, { type: type + ';BASE64' });
    yield call(reduxSagaFirebase.storage.uploadFile, imageRef, blob);
    const downloadURL = yield call(reduxSagaFirebase.storage.getDownloadURL, imageRef);
    blob.close();
    window.XMLHttpRequest = trueXMLHttpRequest;
    return downloadURL;
};

const profileSaga = function* () {
    yield all([
        takeEvery(profileActionCreators.updateUserError, updateError),
        takeEvery(profileActionCreators.uploadAvatar, uploadAvatar),
    ]);
};

export default profileSaga;
