// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNv8r8XUKSBoq_E3n-9PCNArtYgugVMHo",
  authDomain: "fp-fatec.firebaseapp.com",
  projectId: "fp-fatec",
  storageBucket: "fp-fatec.appspot.com",
  messagingSenderId: "202082508557",
  appId: "1:202082508557:web:403d1a5d2be96ed2d4da44",
  measurementId: "G-C3YJX1SMRP"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);