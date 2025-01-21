// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMkFfGksChmHaiPBQbvk8UDdiWjk2scEA",
  authDomain: "portfolio-43bf4.firebaseapp.com",
  projectId: "portfolio-43bf4",
  storageBucket: "portfolio-43bf4.firebasestorage.app",
  messagingSenderId: "740896394327",
  appId: "1:740896394327:web:d94597ae4455c96a18a712",
  measurementId: "G-V991TWV5EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);