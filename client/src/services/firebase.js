import firebase from 'firebase';
//import ReduxSagaFirebase from 'redux-saga-firebase';
import RNFetchBlob from 'rn-fetch-blob';

firebase.initializeApp({
    apiKey: 'AIzaSyAkkeQYYMX8rr_FWSHig9jGQJnVJ81jg2U',
    projectId: 'reactfilms-853e9',
    storageBucket: 'gs://reactfilms-853e9.appspot.com'
});

//export const reduxSagaFirebase = new ReduxSagaFirebase(firebase);
export { firebase };

export const uploadToCloud = async function (props) {
    const { uri, fileName, type, user } = props;
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    const trueXMLHttpRequest = window.XMLHttpRequest;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;
    const storage = firebase.storage();
    const imageRef = storage.ref(user._id).child(fileName);
    const data = await fs.readFile(uri, 'base64');
    const blob = await Blob.build(data, { type: type + ';BASE64' });
    await imageRef.put(blob);
    const downloadURL = await imageRef.getDownloadURL();
    blob.close();
    window.XMLHttpRequest = trueXMLHttpRequest;
    return downloadURL;
};
