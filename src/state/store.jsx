import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import buttonProjectReducer from "./features/buttonProjectSlice";
import DiscountReducer from "./features/totalDiscountSlice";
import MpReducer from "./features/mpSlice";
import CartArrReducer from "./features/arrayCartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    buttonProject: buttonProjectReducer,
    totalDiscount: DiscountReducer,
    mercadoPago: MpReducer,
    arrCartUser: CartArrReducer,
  },
});
