import { createSlice } from "@reduxjs/toolkit";

const TotalDiscountSlice = createSlice({
  name: "discount",
  initialState: { itemCount: 0 },
  reducers: {
    addDiscount: (state, { payload }) => {
      state.itemCount = payload;
    },
  },
});
export const { addDiscount } = TotalDiscountSlice.actions;
export default TotalDiscountSlice.reducer;
