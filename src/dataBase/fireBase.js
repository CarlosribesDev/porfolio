
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBco82VA6QIm_Q0jdZGXeEGnwrXlfHq_vU",
  authDomain: "bunker-80792.firebaseapp.com",
  projectId: "bunker-80792",
  storageBucket: "bunker-80792.appspot.com",
  messagingSenderId: "1016971780729",
  appId: "1:1016971780729:web:bdb08bb78a45093b632aa8"
};

// Initialize Firebase
const appInit= firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const created = firebase.firestore.Timestamp

export {appInit,db,created}