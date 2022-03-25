import * as firebase from 'firebase';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import 'firebase/firebase-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDuMHcD4be9nOuPAGMx9o0AqftoMpNRIUA",
    authDomain: "picel-test.firebaseapp.com",
    projectId: "picel-test",
    storageBucket: "picel-test.appspot.com",
    messagingSenderId: "469167938468",
    appId: "1:469167938468:web:39b3b7fc602644227dbf31",
    measurementId: "G-7W6VQ6V3VS"
  };

  firebase.initializeApp(firebaseConfig);

  let app;

  if(!firebase.apps){
      app = firebase.initializeApp(firebaseConfig);
  }else{
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

export {storage, auth, db};