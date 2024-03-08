import { createSlice } from "@reduxjs/toolkit";

const myAccountSlice = createSlice({
  name: "myAccount",
  initialState: {
    coursesUser: [],
    favoritesUser: [],
    certificates: [],
    myAccountStatus: false,
    alertDelete: false,
    statusDelete: false,
    idCoursedelete: "",
  },
  reducers: {
    addCourses: (state, { payload }) => {
      state.coursesUser = payload;
    },
    listFavorites: (state, { payload }) => {
      state.favoritesUser = payload;
    },
    certificatesUser: (state, { payload }) => {
      state.certificates = payload;
    },
    updatemyAccountStatus: (state, { payload }) => {
      state.myAccountStatus = payload;
    },
    updateAlertDelete: (state, { payload }) => {
      state.alertDelete = payload;
    },
    updateStatusDelete: (state, { payload }) => {
      state.statusDelete = payload;
    },
    deleteFavorite: (state, { payload }) => {
      state.idCoursedelete = payload;
    },
  },
});
export const {
  addCourses,
  listFavorites,
  certificatesUser,
  updatemyAccountStatus,
  updateAlertDelete,
  updateStatusDelete,
  deleteFavorite,
} = myAccountSlice.actions;
export default myAccountSlice.reducer;
