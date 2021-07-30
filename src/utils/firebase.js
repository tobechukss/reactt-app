import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCIGvjFnSXv9xjLmotNUUxzVoAmo4Z_aw8",
    authDomain: "asgard-ac646.firebaseapp.com",
    projectId: "asgard-ac646",
    storageBucket: "asgard-ac646.appspot.com",
    messagingSenderId: "977276215995",
    appId: "1:977276215995:web:7b1aa24b304f9676717f9e"
  }).auth();