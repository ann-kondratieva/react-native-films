const getFilmState = state => state.films.filmDetails.film;
const getFilm = state => state.films.filmDetails.film.item;
const getRatingState = state => state.films.filmDetails.isLoadingRating;
const isRefreshing = state => state.films.filmDetails.isRefreshing;
const isRefreshingComments = state => state.films.filmDetails.isRefreshingComments;

export default {
    getFilmState,
    getFilm,
    getRatingState,
    isRefreshing,
    isRefreshingComments
};