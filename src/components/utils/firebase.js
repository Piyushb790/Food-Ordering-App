// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeNkeWex5iCDHAXs3CAJQfiqzpoqApNjg",
  authDomain: "doondelights.firebaseapp.com",
  projectId: "doondelights",
  storageBucket: "doondelights.firebasestorage.app",
  messagingSenderId: "283001399351",
  appId: "1:283001399351:web:726824b8ea7b23337af7b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
