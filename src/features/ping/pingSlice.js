import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPinging: false,
};

export const pingSlice = createSlice({
  name: "ping",
  initialState,
  reducers: {
    ping: (state) => {
      state.isPinging = true;
    },
    pong: (state) => {
      state.isPinging = false;
    },
  },
});

export const { ping, pong } = pingSlice.actions

export const selectPing = (state) => state.ping.isPinging

export default pingSlice.reducer