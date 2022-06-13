// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtgpLqrym17DZWPOy8iU3JXL0F_p7ps5Q",
  authDomain: "curriculum-vitae-ivss.firebaseapp.com",
  projectId: "curriculum-vitae-ivss",
  storageBucket: "curriculum-vitae-ivss.appspot.com",
  messagingSenderId: "584258545902",
  appId: "1:584258545902:web:a65ccc07585f63a9be2bff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth();