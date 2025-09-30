import { createSlice } from "@reduxjs/toolkit";
import { fetchCardDetails, fetchCardSearch } from "./cardMedicine-operations";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    items: [],
    BasketItems: [],
    status: "idle",
    error: null,
    itemID: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardSearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCardSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCardSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCardDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCardDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.itemID = action.payload;
      })
      .addCase(fetchCardDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default cardSlice.reducer;
