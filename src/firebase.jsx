// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
// import { initializeApp } from "firebase/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqXH87l-4kk-ZpWBLuTDiFO7pLerkdYjg",
  authDomain: "pushdata-app.firebaseapp.com",
  databaseURL: "https://pushdata-app-default-rtdb.firebaseio.com",
  projectId: "pushdata-app",
  storageBucket: "pushdata-app.appspot.com",
  messagingSenderId: "805793953535",
  appId: "1:805793953535:web:31a8cf7ade1f902516beca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database= firebase.database();
export  default firebase;