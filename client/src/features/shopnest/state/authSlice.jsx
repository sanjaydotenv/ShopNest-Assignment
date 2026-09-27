import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "AuthUser",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      console.log("running")
      state.user = action.payload;
      state.isAuthenticate = true;
    },
  },
});

export const { registerUser } = authSlice.actions;

export default authSlice.reducer;
