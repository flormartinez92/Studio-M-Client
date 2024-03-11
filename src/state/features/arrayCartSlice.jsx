import { createSlice } from "@reduxjs/toolkit";

const CartArrSlice = createSlice({
  name: "cartCourses",
  initialState: { arrCart: [] },
  reducers: {
    updateCart: (state, { payload }) => {
      state.arrCart = payload;
    },
  },
});
export const { updateCart } = CartArrSlice.actions;
export default CartArrSlice.reducer;
