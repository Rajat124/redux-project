import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isUserLoggedIn: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isUserLoggedIn = true;
    },
    logout(state) {
      state.isUserLoggedIn = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice;
