import { takeEvery, all, put } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';

import authActionCreators from '../actions';
import loginSaga from '../pages/Login/saga';
import registerSaga from '../pages/Register/saga';
import { navigate } from '../../../services/navigationService';

const redirectToLogin = function () {
    //yield put(push('/login'));
    navigate('Login');
};

const authError = function* (action) {
    const { form, error } = action.payload;
    yield put(authActionCreators.openModal(error));
    yield put(stopSubmit(form, { _error: error }));
};

const authSaga = function* () {
    yield all([
        loginSaga(),
        registerSaga(),
        takeEvery(authActionCreators.logout, redirectToLogin),
        takeEvery(authActionCreators.authError, authError),
    ]);
};

export default authSaga;