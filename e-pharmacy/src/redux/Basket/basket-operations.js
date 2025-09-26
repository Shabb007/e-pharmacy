import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
const db = getFirestore();

export const fetchBasket = createAsyncThunk(
  "Basket/fetchBasket",
  async (_, thunkApi) => {
    try {
      const user = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, resolve, reject);
      });

      if (!user) return [];

      const userSnap = await getDoc(doc(db, "users", user.uid));
      const cart = userSnap.data()?.cart || [];

      return cart;
    } catch (error) {
      console.error("Ошибка при получении корзины:", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addItemBasket = createAsyncThunk(
  "Basket/addItemBasket",
  async ({ id, price }, thunkApi) => {
    try {
      const user = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, resolve, reject);
      });

      if (!user) {
        console.warn("Пользователь не авторизован");
        return thunkApi.rejectWithValue("User not authenticated");
      }

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      const cart = Array.isArray(userSnap.data()?.cart)
        ? userSnap.data().cart
        : [];

      const alreadyExists = cart.some((item) => item.id === id);
      if (alreadyExists) {
        console.log(`Товар с id ${id} уже в корзине`);
        await thunkApi.dispatch(removeItemBasket({ id }));
        return thunkApi.rejectWithValue("Item already in basket");
      }

      const updatedCart = [...cart, { id, price }];
      await updateDoc(userRef, { cart: updatedCart });

      const resultAction = await thunkApi.dispatch(fetchBasket());

      if (fetchBasket.fulfilled.match(resultAction)) {
        return resultAction.payload;
      } else {
        return thunkApi.rejectWithValue(
          "Ошибка при получении обновлённой корзины"
        );
      }
    } catch (error) {
      console.error("Ошибка при добавлении товара в корзину:", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const removeItemBasket = createAsyncThunk(
  "Basket/removeItemBasket",
  async ({ id }, thunkApi) => {
    console.log(id);
    try {
      const user = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, resolve, reject);
      });

      if (!user) return thunkApi.rejectWithValue("User not authenticated");

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      const cart = userSnap.data()?.cart || [];

      const updatedCart = cart.filter((item) => item.id !== id);
      await updateDoc(userRef, { cart: updatedCart });

      const updatedSnap = await getDoc(userRef);
      const newCart = updatedSnap.data()?.cart || [];
      const resultAction = await thunkApi.dispatch(fetchBasket());

      if (fetchBasket.fulfilled.match(resultAction)) {
        return resultAction.payload;
      } else {
        return thunkApi.rejectWithValue(
          "Ошибка при получении обновлённой корзины"
        );
      }
      return newCart;
    } catch (error) {
      console.error("Ошибка при удалении товара из корзины:", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCardBasket = createAsyncThunk(
  "Basket/fetchCardBasket",
  async (arrayParams, thunkApi) => {
    if (!arrayParams || arrayParams.length === 0) {
      return [];
    }
    try {
      const ids = arrayParams.map((item) => item.id);
      const medicineQuery = query(
        collection(db, "products"),
        where("id", "in", ids)
      );

      const querySnapshot = await getDocs(medicineQuery);
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(dataArray);
      return dataArray;
    } catch (error) {
      console.error("Error fetching search results: ", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
