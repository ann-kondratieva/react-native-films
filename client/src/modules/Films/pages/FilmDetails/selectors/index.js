const getFilmState = state => state.films.filmDetails.film;
const getFilm = state => state.films.filmDetails.film.item;
const getRatingState = state => state.films.filmDetails.isLoadingRating;

export default {
    getFilmState,
    getFilm,
    getRatingState
};