import { createSlice } from "@reduxjs/toolkit";

const setCoursesSlice = createSlice({
  name: "setCourses",
  initialState: {
    allCourses: [],
    statusCourse: false,
  },
  reducers: {
    fetchCourses: (state, { payload }) => {
      state.allCourses = payload;
    },
    updateIsFavorite: (state, { payload: courseId }) => {
      const courseToUpdate = state.allCourses.find(
        (course) => course._id === courseId
      );

      if (courseToUpdate) {
        courseToUpdate.isFavorite = !courseToUpdate.isFavorite;
      }
    },
  },
});

export const { fetchCourses, updateIsFavorite } = setCoursesSlice.actions;
export default setCoursesSlice.reducer;
