import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/slices/cartSlice";
import orderSlice from "@/slices/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice,
  },
});
