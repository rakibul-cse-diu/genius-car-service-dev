// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyDU75tAYBp3y41C85Q2xzrTcNp2Xw5Mg",
    authDomain: "genius-car-dev.firebaseapp.com",
    projectId: "genius-car-dev",
    storageBucket: "genius-car-dev.appspot.com",
    messagingSenderId: "1086702993372",
    appId: "1:1086702993372:web:73fc999a64882430191919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;