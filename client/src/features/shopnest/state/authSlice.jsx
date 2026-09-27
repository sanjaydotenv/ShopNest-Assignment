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
      state.user = action.payload;
      state.isAuthenticate = true;
    },
    loginUser: (state , action) => {
      console.log(action.payload.user)
      console.log(action.payload.accessToken)
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    }
  },
});

export const { registerUser , loginUser } = authSlice.actions;

export default authSlice.reducer;
