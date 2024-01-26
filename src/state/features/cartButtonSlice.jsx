import { createSlice } from "@reduxjs/toolkit";

const cartButtonSlice = createSlice({
  name: "buttonCart",
  initialState: {
    buttonCart: [],
  },
  reducers: {
    isInCart: (state, { payload }) => {
      state.buttonCart = payload;
    },
    // isNotInCart: (state, { payload }) => {
    //   state.coursesInCart = state.coursesInCart.filter(
    //     (courseId) => courseId !== payload
    //   );
    // },
  },
});

export const { isInCart } = cartButtonSlice.actions;
export default cartButtonSlice.reducer;
