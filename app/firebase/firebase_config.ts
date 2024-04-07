// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPOauLNrP1uuWyDBlll18Kwzp5QtHH2XY",
  authDomain: "chat-gpt-8755f.firebaseapp.com",
  projectId: "chat-gpt-8755f",
  storageBucket: "chat-gpt-8755f.appspot.com",
  messagingSenderId: "648774260247",
  appId: "1:648774260247:web:8dd201a71d9edbe4372e52",
  measurementId: "G-TGGZ8V6KDD",
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
