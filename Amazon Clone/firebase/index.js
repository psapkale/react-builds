// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "gfs-module5.firebaseapp.com",
   projectId: "gfs-module5",
   storageBucket: "gfs-module5.firebasestorage.app",
   messagingSenderId: "329010596315",
   appId: "1:329010596315:web:cd55180f15863b4d21fffe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
