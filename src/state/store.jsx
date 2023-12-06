import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import buttonProjectReducer from "./features/buttonProjectSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    buttonProject: buttonProjectReducer,
  },
});
