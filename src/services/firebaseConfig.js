import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA98UaK9RjtmAAyKqexBXv4sjXuaOATUk",
  authDomain: "tasklist-14d36.firebaseapp.com",
  projectId: "tasklist-14d36",
  storageBucket: "tasklist-14d36.appspot.com",
  messagingSenderId: "875173226382",
  appId: "1:875173226382:web:aeda81b4fac336d67ba6df",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
