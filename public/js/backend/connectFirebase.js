// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbnV0oW7S3BeEopv9r01NZhmyNQuI8Y4A",
  authDomain: "myportfolio-website-cb461.firebaseapp.com",
  databaseURL: "https://myportfolio-website-cb461-default-rtdb.firebaseio.com",
  projectId: "myportfolio-website-cb461",
  storageBucket: "myportfolio-website-cb461.firebasestorage.app",
  messagingSenderId: "109159639665",
  appId: "1:109159639665:web:149591bb21860bf490c9d0",
  measurementId: "G-PE6G042H9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {};