import { createAction } from 'redux-actions';

const registerActionCreators = {
    registerRequest: createAction('REGISTER_REQUEST'),
    registerSuccess: createAction('REGISTER_SUCCESS'),
    registerError: createAction('REGISTER_ERROR'),
    redirectToSignIn: createAction('REDIRECT_TO_SIGN_IN')
};

export default registerActionCreators;