import { createSlice } from "@reduxjs/toolkit";

export const buttonProjectSlice = createSlice({
  name: "buttonProject",
  initialState: "Entregar Proyecto",
  reducers: {
    changeButton: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeButton } = buttonProjectSlice.actions;
export default buttonProjectSlice.reducer;
