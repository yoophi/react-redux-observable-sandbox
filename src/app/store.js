import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { pingSlice } from "../features/ping/pingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pingSlice.name]: pingSlice.reducer,
  },
});
