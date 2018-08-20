const getFilms = state => state.films.filmList.items;
const getFilmsState = state => state.films.filmList;
const isSearching = state => state.films.filmList.isSearching;

const filmSelectors = {
    getFilms,
    getFilmsState,
    isSearching
};

export default filmSelectors;