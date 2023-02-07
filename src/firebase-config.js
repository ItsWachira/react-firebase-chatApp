// import firebase from 'firebase'

import { initializeApp } from "firebase/app";
import {getFirestore}  from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {db, auth, provider}
