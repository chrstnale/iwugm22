// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1y8yLy_j6zXNJ4oZ0VhOaoaON4M_Faso",
  authDomain: "iwugm2022.firebaseapp.com",
  projectId: "iwugm2022",
  storageBucket: "iwugm2022.appspot.com",
  messagingSenderId: "202783487010",
  appId: "1:202783487010:web:bda342063be2c84ebbc67b",
  measurementId: "G-02D0G2MEGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);