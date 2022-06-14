import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

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
const app = initializeApp(config);
export const auth = getAuth();
export const db = getDatabase(app);

export default firebase;