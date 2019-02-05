import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB__gynwgAbIucW5XuvSrmW9sjunLEMfzk",
    authDomain: "cgs-server-cdda2.firebaseapp.com",
    databaseURL: "https://cgs-server-cdda2.firebaseio.com",
    projectId: "cgs-server-cdda2",
    storageBucket: "cgs-server-cdda2.appspot.com",
    messagingSenderId: "216705291584"
  };

let app = firebase.initializeApp(config);

export const db = app.firestore()