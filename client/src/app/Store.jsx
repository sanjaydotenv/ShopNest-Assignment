import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../features/shopnest/state/authSlice.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});
