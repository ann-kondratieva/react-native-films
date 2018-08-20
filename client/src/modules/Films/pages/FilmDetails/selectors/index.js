const getFilmState = state => state.films.filmDetails.film;
const getFilm = state => state.films.filmDetails.film.item;
const getRatingState = state => state.films.filmDetails.isLoadingRating;
const isRefreshing = state => state.films.filmDetails.isRefreshing;

export default {
    getFilmState,
    getFilm,
    getRatingState,
    isRefreshing
};