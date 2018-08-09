const getGalleryState = state => state.films.filmDetails.gallery;
const getImage = state => state.films.filmDetails.gallery.image;

export default {
    getGalleryState,
    getImage
};