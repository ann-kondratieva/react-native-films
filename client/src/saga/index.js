import { all, call, takeEvery, put, select } from 'redux-saga/effects';
import _ from 'lodash';

import authSaga from '../modules/Auth/saga';
import filmsSaga from '../modules/Films/saga';
import api from '../services/api';
import makeRequest from '../services/makeRequest';
import userSelectors from '../modules/Auth/selectors';
import authHeader from '../services/authHeader';
import authActions from '../modules/Auth/actions';
import reactotronReactNative from 'reactotron-react-native';

const watchRequest = function* (action) {
    try {
        const requestProperties = api[_.camelCase(action.type)](action.payload);
        if (requestProperties.headers.authorization === undefined) {
            const token = yield select(userSelectors.getToken);
            requestProperties.headers.authorization = authHeader(token);
        }
        const response = yield call(makeRequest, requestProperties);
        yield put({
            type: action.type.replace('_REQUEST', '_SUCCESS'),
            response: response ? response.data : {}
        });
    } catch (error) {
        if (error.response.status === 401) {
            yield put(authActions.authError({
                form: action.type.replace('_REQUEST', '_FORM'),
                error: error.response.data.message
            }));
        } else yield put({
            type: action.type.replace('_REQUEST', '_ERROR'),
            error: error.response.data.message
        });
    }
};

const rootSaga = function* () {
    yield all([
        takeEvery((action) => _.endsWith(action.type, '_REQUEST'), watchRequest),
        authSaga(),
        filmsSaga()
    ]);
};

export default rootSaga;