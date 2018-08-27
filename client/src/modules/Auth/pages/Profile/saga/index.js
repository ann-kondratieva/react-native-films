import { takeEvery, all, put, call } from 'redux-saga/effects';
import RNFetchBlob from 'rn-fetch-blob';

import profileActionCreators from '../actions';
import modalActionCreators from '../../../../../components/Modal/actions';
import reactotronReactNative from 'reactotron-react-native';
import { firebase, reduxSagaFirebase } from '../../../../../services/firebase';

const updateError = function* (action) {
    const { error } = action;
    yield put(modalActionCreators.openModal(error));
};

const uploadAvatar = function* (action) {
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    const trueXMLHttpRequest = window.XMLHttpRequest;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;
    try {
        const { uri, user, fileName, type } = action.payload;
        const storage = firebase.storage();
        const imageRef = storage.ref(user._id).child(fileName);
        const data = yield call(fs.readFile, uri, 'base64');
        const blob = yield call(Blob.build, data, { type: type + ';BASE64' });
        yield call(reduxSagaFirebase.storage.uploadFile, imageRef, blob);
        blob.close();
        const downloadURL = yield call(reduxSagaFirebase.storage.getDownloadURL, imageRef);
        user.avatar = downloadURL;
        yield put(profileActionCreators.updateUserRequest({ user }));
    } catch (error) {
        throw error;
    }
    window.XMLHttpRequest = trueXMLHttpRequest;

};

const profileSaga = function* () {
    yield all([
        takeEvery(profileActionCreators.updateUserError, updateError),
        takeEvery(profileActionCreators.uploadAvatar, uploadAvatar),
    ]);
};

export default profileSaga;
