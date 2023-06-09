import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cart: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart"))
    : { cartItems: [], shippingAddress: {}, paymentMethod: "" },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      state.cart.cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cart", JSON.stringify({ ...state.cart }));
    },
    removeItem: (state, action) => {
      state.cart.cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      Cookies.set("cart", JSON.stringify({ ...state.cart }));
    },
    resetCart: (state) => {
      state.cart = {
        cartItems: [],
        shippingAddress: {},
        paymentMethod: "",
      };
      Cookies.remove("cart");
    },
    saveShippingAddress: (state, action) => {
      state.cart.shippingAddress = action.payload;
      Cookies.set("cart", JSON.stringify({ ...state.cart }));
    },
    savePaymentMethod: (state, action) => {
      state.cart.paymentMethod = action.payload;
      Cookies.set("cart", JSON.stringify({ ...state.cart }));
    },
    cartClearItems: (state) => {
      state.cart.cartItems = [];
      Cookies.set("cart", JSON.stringify({ ...state.cart }));
    },
  },
});

export const {
  addItem,
  removeItem,
  resetCart,
  saveShippingAddress,
  savePaymentMethod,
  cartClearItems,
} = cartSlice.actions;

export default cartSlice.reducer;
