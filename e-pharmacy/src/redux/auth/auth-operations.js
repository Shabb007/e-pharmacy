import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { fetchBasket } from "../Basket/basket-operations";

const auth = getAuth();
const db = getFirestore();

export const login = createAsyncThunk(
  "Auth/login",
  async (arrayParams, thunkApi) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        arrayParams.email,
        arrayParams.password
      );
      const user = userCredential.user;
      console.log(user);
      return {
        name: user.displayName,
        uid: user.uid,
        email: user.email,
      };
    } catch (error) {
      console.error("Error logging in: ", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "Auth/register",
  async (arrayParams, thunkApi) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        arrayParams.email,
        arrayParams.password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: arrayParams.name });

      await setDoc(doc(collection(db, "users"), user.uid), {
        username: arrayParams.name,
        email: user.email,
        cart: {},
      });

      return {
        username: arrayParams.name,
        uid: user.uid,
        email: user.email,
      };
    } catch (error) {
      console.error("Error registering: ", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "Auth/currentUser",
  async (_, thunkApi) => {
    try {
      const user = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, resolve, reject);
      });

      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        await thunkApi.dispatch(fetchBasket());
        return {
          username: user.displayName,
          uid: user.uid,
          email: user.email,
          id: user.id,
          ...userDoc.data(),
          cards: user.cart || {},
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching current user: ", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("Auth/logout", async (_, thunkApi) => {
  try {
    await signOut(auth);
    return;
  } catch (error) {
    console.error("Error signing out: ", error);
    return thunkApi.rejectWithValue(error.message);
  }
});
