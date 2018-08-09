import { all } from 'redux-saga/effects';

import allFilmsSaga from '../pages/Films/saga';
import filmDetailsSaga from '../pages/FilmDetails/saga';

const filmsSaga = function* () {
    yield all([
        allFilmsSaga(),
        filmDetailsSaga()
    ]);
};

export default filmsSaga;