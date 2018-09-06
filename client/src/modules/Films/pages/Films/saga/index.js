import { takeEvery, all, put, select } from 'redux-saga/effects';
import { getFormValues, reset } from 'redux-form';

import filmsActionCreators from '../actions';
import { FILMS_LIMIT, SEARCH_FORM, SORT_FORM } from '../constants';
import filmSelectors from '../selectors';
import { navigate } from '../../../../../services/navigationService';

const redirect = function (action) {
    navigate('FilmDetails', {
        id: action.payload
    });
};

const loadFilms = function* () {
    const { getFilmsRequest } = filmsActionCreators;
    let films = yield select(filmSelectors.getFilms);
    const searchFormValues = yield select(getFormValues(SEARCH_FORM));
    const sortFormValues = yield select(getFormValues(SORT_FORM));
    yield put(getFilmsRequest({
        start: films.length,
        end: films.length + FILMS_LIMIT,
        search: searchFormValues ? searchFormValues.search : undefined,
        orderBy: sortFormValues ? sortFormValues.sortBy : undefined,
    }));
};

const getReadyToLoad = function* () {
    const { setHasMore, clearFilms } = filmsActionCreators;
    yield put(setHasMore(true));
    yield put(clearFilms());
    yield loadFilms();
};

const resetAndUpdate = function* () {
    yield put(reset(SEARCH_FORM));
    yield getReadyToLoad();
};

const allFilmsSaga = function* () {
    const { redirectToFilm, loadMoreFilms, applyFormChange, resetAndUpdateList } = filmsActionCreators;
    yield all([
        takeEvery(redirectToFilm, redirect),
        takeEvery(loadMoreFilms, loadFilms),
        takeEvery(applyFormChange, getReadyToLoad),
        takeEvery(resetAndUpdateList, resetAndUpdate)
    ]);
};

export default allFilmsSaga;