import { createSlice } from "@reduxjs/toolkit";

export const buttonProjectSlice = createSlice({
  name: "buttonProject",
  initialState: false,
  reducers: {
    changeButtonState: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeButtonState } = buttonProjectSlice.actions;
export default buttonProjectSlice.reducer;
