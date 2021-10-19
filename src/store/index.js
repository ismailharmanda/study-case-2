import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./products";
import cartSlice from "./cart";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export const productActions = productSlice.actions;
export const cartActions = cartSlice.actions;

export default store;
