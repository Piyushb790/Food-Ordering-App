// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "doondelights.firebaseapp.com",
  projectId: "doondelights",
  storageBucket: "doondelights.firebasestorage.app",
  messagingSenderId: "283001399351",
  appId: "1:283001399351:web:726824b8ea7b23337af7b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
