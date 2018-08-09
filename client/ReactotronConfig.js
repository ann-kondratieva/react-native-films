import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
    .configure({ host: '10.0.2.2' }) // controls connection & communication settings
    .useReactNative()
    .use(sagaPlugin())
    .use(reactotronRedux()) // add all built-in react native plugins
    .connect(); // let's connect!