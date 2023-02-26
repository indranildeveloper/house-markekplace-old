// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUk0pjXpSMayCllhhQcIyWQhWGFm0QKaQ",
  authDomain: "house-marketplace-app-230a2.firebaseapp.com",
  projectId: "house-marketplace-app-230a2",
  storageBucket: "house-marketplace-app-230a2.appspot.com",
  messagingSenderId: "478964481399",
  appId: "1:478964481399:web:5ecd94b9319f4178f5b572",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
