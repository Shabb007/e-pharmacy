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
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBJBZ1XEjwF566vhBszwJ-tBBSd4R0W_M0",
  authDomain: "e-pharmacy-f3e73.firebaseapp.com",
  projectId: "e-pharmacy-f3e73",
  storageBucket: "e-pharmacy-f3e73.firebasestorage.app",
  messagingSenderId: "1098439605213",
  appId: "1:1098439605213:web:81bb4f82ccc21e88e0d434",
  measurementId: "G-EXW1W71KSG",
};

const app = initializeApp(firebaseConfig);

export default app;
