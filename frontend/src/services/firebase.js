// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn1Mw-lXy6zJgkavRPZZABLFtHN0XadYQ",
  authDomain: "seagle-auth.firebaseapp.com",
  projectId: "seagle-auth",
  storageBucket: "seagle-auth.firebasestorage.app",
  messagingSenderId: "242820230362",
  appId: "1:242820230362:web:4605861028d8a1d681c9e3",
  measurementId: "G-ZXTKEGPPYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);