import { createSlice } from "@reduxjs/toolkit";

const MpSlice = createSlice({
  name: "mercadoPago",
  initialState: { preferenceId: "" },
  reducers: {
    updateStatus: (state, { payload }) => {
      state.preferenceId = payload;
    },
  },
});
export const { updateStatus } = MpSlice.actions;
export default MpSlice.reducer;
