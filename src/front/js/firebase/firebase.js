// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj_PKnSzWcYuPKhBz_u4uw55fd_GTV5j0",
  authDomain: "geeks-e71e0.firebaseapp.com",
  projectId: "geeks-e71e0",
  storageBucket: "geeks-e71e0.appspot.com",
  messagingSenderId: "125769146627",
  appId: "1:125769146627:web:a9b869a70316d8cefc0936"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)