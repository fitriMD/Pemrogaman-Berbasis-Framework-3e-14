import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyB1dW-X5MnIVbktbSeyeNinfvrsV0G8WYo",
  authDomain: "flutterfirebase-2be5d.firebaseapp.com",
  databaseURL: "https://flutterfirebase-2be5d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "flutterfirebase-2be5d",
  storageBucket: "flutterfirebase-2be5d.appspot.com",
  messagingSenderId: "688280762161",
  appId: "1:688280762161:web:cceb1284e1cd0bfcb86210",
  measurementId: "G-C8CXTNMWFG"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
