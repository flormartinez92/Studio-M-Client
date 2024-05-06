import { createSlice } from "@reduxjs/toolkit";

const userImgSlice = createSlice({
  name: "userImg",
  initialState: { userImg: "" },
  reducers: {
    setUserImg: (state, { payload }) => {
      state.userImg = payload;
    },
  },
});

export const { setUserImg } = userImgSlice.actions;
export default userImgSlice.reducer;
