// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0jZA_YSIoFb4X3ezVrMrbi4myVNsy5sc",

  authDomain: "house-search-365fb.firebaseapp.com",

  projectId: "house-search-365fb",

  storageBucket: "house-search-365fb.appspot.com",

  messagingSenderId: "268952784067",

  appId: "1:268952784067:web:c7515899a4a018e6572676",

  measurementId: "G-Q4E3JYWQXB",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
export const auth = getAuth(app);
// initialize cloud firestore
export const db = getFirestore(app);
// Initialize cloud storage and get reference to the services (root reference)
export const storage = getStorage(app);
