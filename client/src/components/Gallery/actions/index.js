import { createAction } from 'redux-actions';

const galleryActionCreators = {
    openImage: createAction('OPEN_IMAGE'),
    closeImage: createAction('CLOSE_IMAGE'),
    changeImage: createAction('CHANGE_IMAGE')
};

export default galleryActionCreators;