import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJrv3GYZ9cuIJNA2zwDQETZpGICHwPK6g",
    authDomain: "linkedinclone-52123.firebaseapp.com",
    projectId: "linkedinclone-52123",
    storageBucket: "linkedinclone-52123.appspot.com",
    messagingSenderId: "1064939391025",
    appId: "1:1064939391025:web:96bd4003796bf9981cad10"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };