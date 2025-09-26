import { createSlice } from "@reduxjs/toolkit";
import { fetchStoreCard } from "./cardStore-operations";

const cardsStoreSlice = createSlice({
  name: "cardsStore",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStoreCard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchStoreCard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default cardsStoreSlice.reducer;
