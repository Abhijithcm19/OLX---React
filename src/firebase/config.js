import firebase from 'firebase'
import'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd3mPg7nhc_uG1K38lrbshvdjiP2cFU-A",
    authDomain: "fir-6f501.firebaseapp.com",
    projectId: "fir-6f501",
    storageBucket: "fir-6f501.appspot.com",
    messagingSenderId: "474266697196",
    appId: "1:474266697196:web:3582b865d65623400a94c9",
    measurementId: "G-2FWSHE4QW1"
  };


 export default firebase.initializeApp(firebaseConfig)
