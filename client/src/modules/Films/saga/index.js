import { all } from 'redux-saga/effects';

import allFilmsSaga from '../pages/Films/saga';
import filmDetailsSaga from '../pages/FilmDetails/saga';
import addFilmSaga from '../pages/AddFilm/saga';

const filmsSaga = function* () {
    yield all([
        allFilmsSaga(),
        filmDetailsSaga(),
        addFilmSaga()
    ]);
};

export default filmsSaga;