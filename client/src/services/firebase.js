import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

firebase.initializeApp({

});

export const reduxSagaFirebase = new ReduxSagaFirebase(firebase);
export { firebase };
