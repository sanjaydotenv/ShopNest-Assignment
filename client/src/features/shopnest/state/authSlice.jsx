import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "AuthUser",
  initialState,
  reducers: {
    register: (state, action) => {},
  },
});

export const { register } = authSlice.actions;

export default authSlice.reducer;
