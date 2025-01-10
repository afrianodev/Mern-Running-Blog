// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-running-blog.firebaseapp.com",
  projectId: "mern-running-blog",
  storageBucket: "mern-running-blog.firebasestorage.app",
  messagingSenderId: "365210087192",
  appId: "1:365210087192:web:f4a10f528e6b4ac65b786d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);