const getImage = state => state.films.addFilm.image;
const isLoading = state => state.films.addFilm.isLoading;

export default {
    getImage,
    isLoading
};