import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
