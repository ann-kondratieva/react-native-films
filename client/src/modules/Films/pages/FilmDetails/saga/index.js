import { takeEvery, all, put } from 'redux-saga/effects';
import { stopSubmit, startSubmit, reset } from 'redux-form';

import filmActionCreators from '../actions';
import { COMMENT_FORM } from '../../../../../components/Comments/constants';
//import gallerySaga from '../components/Gallery/saga';

const stopSubmitting = function* () {
    yield put(stopSubmit(COMMENT_FORM, null));
    yield put(reset(COMMENT_FORM));
};

const startSubmitting = function* () {
    yield put(startSubmit(COMMENT_FORM));
};

const filmDetailsSaga = function* () {
    yield all([
        takeEvery(filmActionCreators.updateFilmSuccess, stopSubmitting),
        takeEvery(filmActionCreators.updateFilmRequest, startSubmitting),
        //gallerySaga()
    ]);
};

export default filmDetailsSaga;