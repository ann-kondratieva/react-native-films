import { takeEvery, all, put } from 'redux-saga/effects';
import { stopSubmit, startSubmit, reset } from 'redux-form';

import loginActionCreators from '../actions';
import { LOGIN_FORM } from '../constants';
import { navigate } from '../../../../../services/navigationService';

const redirectToMain = function* () {
    yield put(stopSubmit(LOGIN_FORM, null));
    navigate('Films');
};

const startSubmitting = function* () {
    yield put(startSubmit(LOGIN_FORM));
};

const redirectToSignUp = function* () {
    navigate('Register');
    yield put(reset(LOGIN_FORM));
};

const loginSaga = function* () {
    yield all([
        takeEvery(loginActionCreators.loginSuccess, redirectToMain),
        takeEvery(loginActionCreators.loginRequest, startSubmitting),
        takeEvery(loginActionCreators.redirectToSignUp, redirectToSignUp),
    ]);
};

export default loginSaga;


