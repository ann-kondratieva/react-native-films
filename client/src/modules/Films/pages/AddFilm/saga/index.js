import { takeEvery, all, put, select } from 'redux-saga/effects';
import { getFormValues, reset } from 'redux-form';

import { navigate } from '../../../../../services/navigationService';
import addFilmActionCreators from '../actions';
import filmsActionCreators from '../../Films/actions';

const redirect = function* (action) {
    const { clearFilms, loadMoreFilms } = filmsActionCreators;
    yield put(clearFilms());
    yield put(loadMoreFilms());
    navigate('Films');
};

const addFilmSaga = function* () {
    yield all([
        takeEvery(addFilmActionCreators.saveFilmsSuccess, redirect),
    ]);
};

export default addFilmSaga;