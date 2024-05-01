// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtHgnVsamgf76y3cE-1OBFNmGECbcbhsE",
  authDomain: "lrdc-boat-app.firebaseapp.com",
  projectId: "lrdc-boat-app",
  storageBucket: "lrdc-boat-app.appspot.com",
  messagingSenderId: "820531552490",
  appId: "1:820531552490:web:a144a3e7e3ccac6cbab793",
  measurementId: "G-7KGWS52JJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
