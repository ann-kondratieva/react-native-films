import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from '../Navigator';
import { store } from '../../store';
import { persistor } from '../../store';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigator />
            </PersistGate>
        </Provider>
    );
};

export default App;
