import firebase from "firebase/app";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9QpUVfsfbGo1zo9LvxjdfeUHFqxwbxwY",
  authDomain: "curso-udemy-87808.firebaseapp.com",
  databaseURL: "https://curso-udemy-87808.firebaseio.com",
  projectId: "curso-udemy-87808",
  storageBucket: "curso-udemy-87808.appspot.com",
  messagingSenderId: "686898631544",
  appId: "1:686898631544:web:7ede09a58b456c16a26e8d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
