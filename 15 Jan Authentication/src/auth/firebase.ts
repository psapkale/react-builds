// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "gfs-module5.firebaseapp.com",
   projectId: "gfs-module5",
   storageBucket: "gfs-module5.firebasestorage.app",
   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGESENDERID,
   appId: import.meta.env.VITE_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
