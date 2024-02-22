// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8VaJPuhuP2l-gqK2AI3p2H6Zz1l2Yb5Q",
  authDomain: "fir-e8890.firebaseapp.com",
  databaseURL: "https://fir-e8890-default-rtdb.firebaseio.com",
  projectId: "fir-e8890",
  storageBucket: "fir-e8890.appspot.com",
  messagingSenderId: "1008936974984",
  appId: "1:1008936974984:web:09514b2f55f5b4335afd3d",
  measurementId: "G-NEHK7VECJL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export { ref, set, onValue, update, signInWithPopup, GoogleAuthProvider };
export const provider = new GoogleAuthProvider();

// Return as an object
