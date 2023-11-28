import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDxBV276nD9tVrU03MndGX8ewBS0GTziyI",
  authDomain: "college-website-07.firebaseapp.com",
  projectId: "college-website-07",
  storageBucket: "college-website-07.appspot.com",
  messagingSenderId: "391308344902",
  appId: "1:391308344902:web:325da54f44be1bfd215447",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;