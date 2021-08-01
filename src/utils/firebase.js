import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
   apiKey: "AIzaSyC796yWODE8RQ3fYA83uPnmDY6e9o6m6hQ",
    authDomain: "asgard-6e253.firebaseapp.com",
    projectId: "asgard-6e253",
    storageBucket: "asgard-6e253.appspot.com",
    messagingSenderId: "658603099041",
    appId: "1:658603099041:web:419631e8350ece285101e0",
    measurementId: "G-02KZ78LW1X"
  }).auth();