import { createSlice } from "@reduxjs/toolkit";
import { currentUser, login, logout, register } from "./auth-operations";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    error: null,
    name: "",
    auth: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.name = action.payload.username;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.name = action.payload.name;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(currentUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload) {
          state.auth = action.payload.uid;
          state.name = action.payload.username;
        } else {
          state.auth = null;
          state.name = null;
        }
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "succeeded";
        state.name = "";
        state.auth = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default AuthSlice.reducer;
