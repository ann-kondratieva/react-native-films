import { takeEvery, all, put, select, getContext, setContext, take } from 'redux-saga/effects';
import { getFormValues } from 'redux-form';

import filmsActionCreators from '../actions';
import { FILMS_LIMIT, SERVICES_FORM } from '../constants';
import filmSelectors from '../selectors';
import Reactotron from 'reactotron-react-native';
import { navigate } from '../../../../../services/navigationService';

const redirect = function (action) {
    navigate('FilmDetails', {
        id: action.payload
    });
};

const loadFilms = function* (action) {
    const { getFilmsRequest } = filmsActionCreators;
    let films = yield select(filmSelectors.getFilms);
    yield put(getFilmsRequest({
        start: films.length,
        end: films.length + FILMS_LIMIT,
        /* orderBy: formValues ? formValues.select : undefined,
        search: formValues ? formValues.search : undefined */
    }));
};

const getReadyToLoad = function* () {
    const { setHasMore, clearFilms } = filmsActionCreators;
    yield put(setHasMore(true));
    yield put(clearFilms());
};

const allFilmsSaga = function* () {
    const { redirectToFilm, loadMoreFilms, applyFormChange } = filmsActionCreators;
    yield all([
        takeEvery(redirectToFilm, redirect),
        takeEvery(loadMoreFilms, loadFilms),
        takeEvery(applyFormChange, getReadyToLoad)
    ]);
};

export default allFilmsSaga;