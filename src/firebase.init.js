// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCOF8DAvv155DkgNm3x8RUgMzEZ3hjnKw",
  authDomain: "planttick.firebaseapp.com",
  projectId: "planttick",
  storageBucket: "planttick.firebasestorage.app",
  messagingSenderId: "407652744223",
  appId: "1:407652744223:web:8a1be902c4225f036ae92a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
