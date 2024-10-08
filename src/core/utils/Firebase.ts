import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBNv8r8XUKSBoq_E3n-9PCNArtYgugVMHo",
  authDomain: "fp-fatec.firebaseapp.com",
  projectId: "fp-fatec",
  storageBucket: "fp-fatec.appspot.com",
  messagingSenderId: "202082508557",
  appId: "1:202082508557:web:403d1a5d2be96ed2d4da44",
};

// Initialize Firebase
export const appFirebase = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase)
export const provider = new GoogleAuthProvider();