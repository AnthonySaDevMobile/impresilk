// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUixe_OHZql-ytcoWWIaNQlAJ7SDdgYL4",
  authDomain: "impresilk-14883.firebaseapp.com",
  projectId: "impresilk-14883",
  storageBucket: "impresilk-14883.appspot.com",
  messagingSenderId: "369168479475",
  appId: "1:369168479475:web:8626afa94a3e32a9f8b386",
  measurementId: "G-ZEYW2FZS88"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export const storage = getStorage(appFirebase)
export const storageRef = ref(storage);