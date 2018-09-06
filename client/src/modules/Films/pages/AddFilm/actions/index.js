import { createAction } from 'redux-actions';

const addFilmActionCreators = {
    saveFilmsRequest: createAction('SAVE_FILM_REQUEST'),
    saveFilmsSuccess: createAction('SAVE_FILM_SUCCESS'),
    saveFilmsError: createAction('SAVE_FILM_ERROR'),
};

export default addFilmActionCreators;