import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    courses: [],
  },
  reducers: {
    addToCart: (state, action)=> {
      state.courses.push(action.payload)
    }
  }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;