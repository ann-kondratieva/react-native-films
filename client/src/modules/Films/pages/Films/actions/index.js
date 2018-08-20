import { createAction } from 'redux-actions';

const filmsActionCreators = {
    getFilmsRequest: createAction('GET_FILMS_REQUEST'),
    getFilmsSuccess: createAction('GET_FILMS_SUCCESS'),
    getFilmsError: createAction('GET_FILMS_ERROR'),
    clearFilms: createAction('CLEAR_FILMS'),
    setHasMore: createAction('SET_HAS_MORE'),
    redirectToFilm: createAction('REDIRECT_TO_FILM'),
    loadMoreFilms: createAction('LOAD_MORE_FILMS'),
    startRefreshing: createAction('START_REFRESHING'),
    applyFormChange: createAction('APPLY_FORM_CHANGE'),
    openSearch: createAction('OPEN_SEARCH'),
    closeSearch: createAction('CLOSE_SEARCH'),
    resetAndUpdateList: createAction('RESET_AND_UPDATE_LIST'),
};

export default filmsActionCreators;