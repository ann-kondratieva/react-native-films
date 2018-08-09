import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import Reactotron from 'reactotron-react-native';

import rootSaga from '../saga';
import persistedReducer from '../reducers';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({
    context: {
        success: null
    },
    sagaMonitor
});

export const store = Reactotron.createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

