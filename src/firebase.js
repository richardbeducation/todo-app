import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAG4yboEN0Mkb1DD1vqK9obvoejMGyyp-E",
  authDomain: "todo-app-3cca6.firebaseapp.com",
  projectId: "todo-app-3cca6",
  storageBucket: "todo-app-3cca6.appspot.com",
  messagingSenderId: "173663595400",
  appId: "1:173663595400:web:c9301ca02933127525a83d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()

export {db}