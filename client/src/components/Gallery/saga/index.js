import { takeEvery, all, put, select } from 'redux-saga/effects';

import galleryActionCreators from '../actions';
import gallerySelectors from '../selectors';
import filmSelectors from '../../../selectors';

const changeImage = function* (action) {
    const curImage = yield select(gallerySelectors.getImage);
    const curFilm = yield select(filmSelectors.getFilm);
    const images = curFilm.images;
    const imageIndex = images.findIndex((image) => image.original === curImage);
    let resultIndex;
    if (imageIndex >= 0 && imageIndex < images.length - 1 && action.payload.isNext) {
        resultIndex = imageIndex + 1;
    } else if (imageIndex > 0 && imageIndex < images.length && !action.payload.isNext) {
        resultIndex = imageIndex - 1;
    } else if (imageIndex === 0 && !action.payload.isNext) {
        resultIndex = images.length - 1;
    } else if (imageIndex === images.length - 1 && action.payload.isNext) {
        resultIndex = 0;
    }
    yield put(galleryActionCreators.openImage(images[resultIndex].original));
};

const gallerySaga = function* () {
    yield all([
        takeEvery(galleryActionCreators.changeImage, changeImage)
    ]);
};

export default gallerySaga;