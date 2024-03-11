import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    loadCourses: (state, { payload }) => {
      state.courses = payload;
    },
    isInCart: (state, { payload }) => {
      const course = state.courses.find((course) => course._id === payload);
      if (course) {
        course.inCart = true;
      }
    },
  },
});

export const { loadCourses, isInCart } = coursesSlice.actions;
export default coursesSlice.reducer;
