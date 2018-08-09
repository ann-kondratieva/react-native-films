const getFilms = state => state.films.filmList.items;
const getFilmsState = state => state.films.filmList;

const filmSelectors = {
    getFilms,
    getFilmsState
};

export default filmSelectors;