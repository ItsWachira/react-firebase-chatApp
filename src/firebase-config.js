// import firebase from 'firebase'

import { initializeApp } from "firebase/app";
import {getFirestore}  from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBMxCPaSLIpJBg_fGUTDDmaKxi1N65Nr_U",
  authDomain: "chat-app-8eb75.firebaseapp.com",
  projectId: "chat-app-8eb75",
  storageBucket: "chat-app-8eb75.appspot.com",
  messagingSenderId: "465782403566",
  appId: "1:465782403566:web:589ea94f9377a77e729eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {db, auth, provider}
