import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: {
    avatar_url: "",
  },
  error: null,
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    fetchUserRequest: (state, action) => {
      state.isLoading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    fetchUserError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchUserCancelled: (state) => {
      state.isLoading = false;
    },
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserError, fetchUserCancelled, } = githubSlice.actions;

export default githubSlice.reducer;
