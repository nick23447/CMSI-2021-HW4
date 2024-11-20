// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmuDz82z5L-ZVgytaUO0MDJ4mu4rOM23o",
  authDomain: "sacred-heart-liturgy.firebaseapp.com",
  projectId: "sacred-heart-liturgy",
  storageBucket: "sacred-heart-liturgy.firebasestorage.app",
  messagingSenderId: "67840022306",
  appId: "1:67840022306:web:ef98ba7cdbcafc669e777b",
  measurementId: "G-M22B0F68SS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)