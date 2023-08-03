import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdSwx7GaKEw3dA3zTGgWjBSN3Wtp94mWA",
  authDomain: "blogcum.firebaseapp.com",
  projectId: "blogcum",
  storageBucket: "blogcum.appspot.com",
  messagingSenderId: "735913223159",
  appId: "1:735913223159:web:788008dec112ae92b6c4f2",
  measurementId: "G-TLNLRZ369C",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
