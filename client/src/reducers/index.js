import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { reducer as formReducer } from 'redux-form';

import films from '../modules/Films/reducers';
import auth from '../modules/Auth/reducers';
import modal from '../components/Modal/reducers';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['auth', 'films', 'form']
};

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage
};

const rootReducer = combineReducers({
    films,
    modal,
    auth: persistReducer(authPersistConfig, auth),
    form: formReducer
});

export default persistReducer(rootPersistConfig, rootReducer);