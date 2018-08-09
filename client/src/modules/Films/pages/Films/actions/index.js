import { createAction } from 'redux-actions';

const filmsActionCreators = {
    getFilmsRequest: createAction('GET_FILMS_REQUEST'),
    getFilmsSuccess: createAction('GET_FILMS_SUCCESS'),
    getFilmsError: createAction('GET_FILMS_ERROR'),
    clearFilms: createAction('CLEAR_FILMS'),
    setHasMore: createAction('SET_HAS_MORE'),
    redirectToFilm: createAction('REDIRECT_TO_FILM'),
    loadMoreFilms: createAction('LOAD_MORE_FILMS'),
    applyFormChange: createAction('APPLY_FORM_CHANGE'),
    startRefreshing: createAction('START_REFRESHING'),
};

export default filmsActionCreators;