import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD55yT6m36bYVS-JWXAwaNAV08Bx_lpK6o",
  authDomain: "techfair-91780.firebaseapp.com",
  projectId: "techfair-91780",
  storageBucket: "techfair-91780.appspot.com",
  messagingSenderId: "98084545103",
  appId: "1:98084545103:web:d2c2bee6f05b610e1c403a"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
