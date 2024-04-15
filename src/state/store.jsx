import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import buttonProjectReducer from "./features/buttonProjectSlice";
import DiscountReducer from "./features/totalDiscountSlice";
import coursesReducer from "./features/coursesSlice";
import myAccountReducer from "./features/myAccountSlice";
import MpReducer from "./features/mpSlice";
import CartArrReducer from "./features/arrayCartSlice";
import fetchCoursesReducer from "./features/setCoursesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    buttonProject: buttonProjectReducer,
    totalDiscount: DiscountReducer,
    courses: coursesReducer,
    myAccount: myAccountReducer,
    mercadoPago: MpReducer,
    arrCartUser: CartArrReducer,
    fetchCourses: fetchCoursesReducer,
  },
});
