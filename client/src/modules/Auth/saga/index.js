import { takeEvery, all, put } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';

import authActionCreators from '../actions';
import loginSaga from '../pages/Login/saga';
import registerSaga from '../pages/Register/saga';
import { navigate } from '../../../services/navigationService';
import modalActionCreators from '../../../components/Modal/actions';
import profileSaga from '../pages/Profile/saga';

const redirectToLogin = function () {
    navigate('Login');
};

const authError = function* (action) {
    const { form, error } = action.payload;
    yield put(modalActionCreators.openModal(error));
    yield put(stopSubmit(form, { _error: error }));
};

const authSaga = function* () {
    yield all([
        loginSaga(),
        registerSaga(),
        profileSaga(),
        takeEvery(authActionCreators.logout, redirectToLogin),
        takeEvery(authActionCreators.authError, authError),
    ]);
};

export default authSaga;