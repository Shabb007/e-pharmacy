import { createSlice } from "@reduxjs/toolkit";
import { fetchCardDetalis, fetchCardSearch } from "./cardMedichine-operations";

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
      .addCase(fetchCardDetalis.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCardDetalis.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.itemID = action.payload;
      })
      .addCase(fetchCardDetalis.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default cardSlice.reducer;
