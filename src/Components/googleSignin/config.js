// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaTP5l_gqA9HTUOjRonggTQXYwcOLnXHA",
  authDomain: "peactice-1e39a.firebaseapp.com",
  projectId: "peactice-1e39a",
  storageBucket: "peactice-1e39a.appspot.com",
  messagingSenderId: "734704600796",
  appId: "1:734704600796:web:b4428c1389ca3a9cf51619",
  measurementId: "G-0Q1P3M1D7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
