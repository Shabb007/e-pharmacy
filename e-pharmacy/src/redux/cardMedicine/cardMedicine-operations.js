import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import app from "../../firebase/firebase.js";

export const fetchCardSearch = createAsyncThunk(
  "cards/fetchCardSearch",
  async (arrayParams, thunkApi) => {
    const db = getFirestore(app);
    const upperPrefix =
      arrayParams.name.charAt(0).toUpperCase() +
      arrayParams.name.slice(1).toLowerCase();
    try {
      let medicineQuery = query(
        collection(db, "products"),
        limit(12),

        where("name", ">=", upperPrefix),
        where("name", "<", upperPrefix + "\uf8ff")
      );

      if (arrayParams.select !== "all") {
        medicineQuery = query(
          collection(db, "products"),
          limit(arrayParams.num),

          where("category", "==", arrayParams.select),
          where("name", ">=", upperPrefix),
          where("name", "<", upperPrefix + "\uf8ff")
        );
      }
      const querySnapshot = await getDocs(medicineQuery);
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dataArray;
    } catch (error) {
      console.error("Error fetching search results: ", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCardDetails = createAsyncThunk(
  "cards/fetchCardDetails",
  async (arrayParams, thunkApi) => {
    const db = getFirestore(app);

    try {
      const medicineQuery = query(
        collection(db, "products"),
        where("name", "==", arrayParams)
      );

      const querySnapshot = await getDocs(medicineQuery);
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dataArray;
    } catch (error) {
      console.error("Error fetching search results: ", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
