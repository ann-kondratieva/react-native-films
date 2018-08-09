import { createAction } from 'redux-actions';

const modalActionCreators = {
    openModal: createAction('OPEN_MODAL'),
    closeModal: createAction('CLOSE_MODAL')
};

export default modalActionCreators;