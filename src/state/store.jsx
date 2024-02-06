import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import buttonProjectReducer from "./features/buttonProjectSlice";
import DiscountReducer from "./features/totalDiscountSlice";
import coursesReducer from "./features/coursesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    buttonProject: buttonProjectReducer,
    totalDiscount: DiscountReducer,
    courses: coursesReducer,
  },
});
