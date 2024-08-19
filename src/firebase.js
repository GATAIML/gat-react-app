import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAdlIKQjDwOWYEXA1PUa9-7YAt4T88XCHc",
    authDomain: "react-to-firebase-data.firebaseapp.com",
    projectId: "react-to-firebase-data",
    storageBucket: "react-to-firebase-data.appspot.com",
    messagingSenderId: "658728920953",
    appId: "1:658728920953:web:c94cfc7b259bd24d8ff1a8",
    measurementId: "G-HY27SZH3L4"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  
  export { auth, db, storage, collection, addDoc, getDocs, ref, uploadBytes, getDownloadURL, signInWithEmailAndPassword, onAuthStateChanged };