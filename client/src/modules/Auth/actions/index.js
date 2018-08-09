import { createAction } from 'redux-actions';

const authActionCreators = {
    logout: createAction('LOGOUT'),
    getUserRequest: createAction('GET_USER_REQUEST'),
    getUserSuccess: createAction('GET_USER_SUCCESS'),
    getUserError: createAction('GET_USER_ERROR'),
    authError: createAction('AUTH_ERROR')
};

export default authActionCreators;