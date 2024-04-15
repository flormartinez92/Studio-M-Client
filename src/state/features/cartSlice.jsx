import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { itemCount: 0, isLoadingPurchase: true },
  reducers: {
    addToCart: (state, { payload }) => {
      state.itemCount = payload;
    },
    statusLoadingPurchase: (state, { payload }) => {
      state.isLoadingPurchase = payload;
    },
  },
});

export const { addToCart, statusLoadingPurchase } = cartSlice.actions;
export default cartSlice.reducer;
