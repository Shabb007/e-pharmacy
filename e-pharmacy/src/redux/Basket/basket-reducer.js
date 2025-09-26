import { createSlice } from "@reduxjs/toolkit";
import {
  addItemBasket,
  removeItemBasket,
  fetchBasket,
  fetchCardBasket,
} from "./basket-operations";

const initialState = {
  BasketItems: [],
  status: "idle",
  error: null,
  BasketCart: [],
};

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchBasket.fulfilled, (state, action) => {
        state.BasketItems = action.payload;
      })

      .addCase(addItemBasket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addItemBasket.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(`Товар успешно добавлен в корзину:`, action.payload);
      })
      .addCase(addItemBasket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(removeItemBasket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeItemBasket.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.BasketItems = action.payload;
      })
      .addCase(removeItemBasket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCardBasket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCardBasket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCardBasket.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.BasketCart = action.payload;
      });
  },
});

export default BasketSlice.reducer;
