import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

firebase.initializeApp({
    apiKey: 'AIzaSyAkkeQYYMX8rr_FWSHig9jGQJnVJ81jg2U',
    projectId: 'reactfilms-853e9',
    storageBucket: 'gs://reactfilms-853e9.appspot.com'
});

export const reduxSagaFirebase = new ReduxSagaFirebase(firebase);
export { firebase };
