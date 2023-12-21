import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { itemCount: 0 },
  reducers: {
    addToCart: (state, { payload }) => {
      state.itemCount = payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
