// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDagWPeal3d1UmnxaweZ2QvkWKJlS17-B4",
  authDomain: "doondelights-908d8.firebaseapp.com",
  projectId: "doondelights-908d8",
  storageBucket: "doondelights-908d8.appspot.com",
  messagingSenderId: "115414292034",
  appId: "1:115414292034:web:a998f6026606a06ac77fdb",
  measurementId: "G-YFH9Q17082",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
