// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgqp5jG_6x2hz-nMGD448M93D42ew4cW0",
  authDomain: "toymaster-1eeeb.firebaseapp.com",
  projectId: "toymaster-1eeeb",
  storageBucket: "toymaster-1eeeb.appspot.com",
  messagingSenderId: "639084451628",
  appId: "1:639084451628:web:dad83245fe9cfa03a9be89",
  measurementId: "G-9FRXXM1H6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;