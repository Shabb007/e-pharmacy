// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { array } from "prop-types";
import { use } from "react";
import { data } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCSV72meERcINP8_4dyJtXx5bQFc3nBROs",
  authDomain: "e-pharmacy-9154f.firebaseapp.com",
  projectId: "e-pharmacy-9154f",
  storageBucket: "e-pharmacy-9154f.firebasestorage.app",
  messagingSenderId: "488911963417",
  appId: "1:488911963417:web:41fdd49fb22e8057e4b188",
  measurementId: "G-SHPN8F7VD1",
};

const app = initializeApp(firebaseConfig);

export default app;
