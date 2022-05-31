import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAf3tT4HHimNzue3xDBSKFcZgeKfjb0Wy8",
  authDomain: "kuis2-pbf.firebaseapp.com",
  datatbaseURL: "https://kuis2-pbf-default-rtdb.firebaseio.com/",
  projectId: "kuis2-pbf",
  storageBucket: "kuis2-pbf.appspot.com",
  messagingSenderId: "692571350471",
  appId: "1:692571350471:web:abfe05d45cc00f5b7825e2",
  measurementId: "G-FQ7LM8HVTG"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;