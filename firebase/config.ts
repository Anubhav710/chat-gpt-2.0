// This code is for connecting to firebase store and i am using detabase services uesing getAuth() function;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMQz4yBK8k87Fm3tn_0h7Y5n-cnPUYAlY",
  authDomain: "smart-attendance-applica-6d440.firebaseapp.com",
  projectId: "smart-attendance-applica-6d440",
  storageBucket: "smart-attendance-applica-6d440.appspot.com",
  messagingSenderId: "708688301387",
  appId: "1:708688301387:web:03c571efd72eb70c1a6cce",
  measurementId: "G-J6LB5M9TSV",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
