import { createAction } from 'redux-actions';

const loginActionCreators = {
    loginRequest: createAction('LOGIN_REQUEST'),
    loginSuccess: createAction('LOGIN_SUCCESS'),
    loginError: createAction('LOGIN_ERROR'),
    redirectToSignUp: createAction('REDIRECT_TO_SIGN_UP')
};

export default loginActionCreators;