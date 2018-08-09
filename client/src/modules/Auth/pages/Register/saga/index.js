import { takeEvery, all, put } from 'redux-saga/effects';
import { stopSubmit, startSubmit, reset } from 'redux-form';

import registerActionCreators from '../actions';
import { REGISTER_FORM } from '../constants';
import { navigate } from '../../../../../services/navigationService';

const redirectToMain = function* () {
    yield put(stopSubmit(REGISTER_FORM, null));
    navigate('Films');
};

const startSubmitting = function* () {
    yield put(startSubmit(REGISTER_FORM));
};

const redirectToSignIn = function* () {
    navigate('Login');
    yield put(reset(REGISTER_FORM));
};

const registerSaga = function* () {
    yield all([
        takeEvery(registerActionCreators.registerSuccess, redirectToMain),
        takeEvery(registerActionCreators.registerRequest, startSubmitting),
        takeEvery(registerActionCreators.redirectToSignIn, redirectToSignIn),
    ]);
};

export default registerSaga;