import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./products";
import cartSlice from "./cart";
import searchSlice from "./search";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    searchTerm: searchSlice.reducer,
  },
});
export const productActions = productSlice.actions;
export const cartActions = cartSlice.actions;
export const searchActions = searchSlice.actions;

export default store;
