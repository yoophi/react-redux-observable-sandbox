import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../epics";
import counterReducer from "../features/counter/counterSlice";
import { pingSlice } from "../features/ping/pingSlice";


const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pingSlice.name]: pingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);
