import firebase from "firebase";
import { firestore, auth } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClEF-Sf31oGfK5ixbqVZ0kpbyzGC-IoME",
  authDomain: "tik-tok-clone-f93a6.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-f93a6.firebaseio.com",
  projectId: "tik-tok-clone-f93a6",
  storageBucket: "tik-tok-clone-f93a6.appspot.com",
  messagingSenderId: "387254207780",
  appId: "1:387254207780:web:d8307817baf95cc7b71fb1",
  measurementId: "G-KXDY1WW3EK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
