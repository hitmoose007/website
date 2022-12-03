// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChBtEQDKlWPOS9k78-bLIp6HvDgaUUnWE",
  authDomain: "magpy-8df29.firebaseapp.com",
  databaseURL: "https://magpy-8df29-default-rtdb.firebaseio.com",
  projectId: "magpy-8df29",
  storageBucket: "magpy-8df29.appspot.com",
  messagingSenderId: "762060855731",
  appId: "1:762060855731:web:787d9e6b95814ff2e113c6",
  measurementId: "G-5HFTGKRSVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);