import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import app from "../../firebase/firebase.js";

export const fetchStoreCard = createAsyncThunk(
  "cards/fetchStoreCard",
  async (_, thunkApi) => {
    const db = getFirestore(app);
    try {
      let medicineQuery = query(collection(db, "nearest_pharmacies"));
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
