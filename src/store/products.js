import { createSlice } from "@reduxjs/toolkit";

import { _products } from "../utils/_products";

const initialProductsState = _products;

const productSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    favoriteToggle(state, action) {
      const targetProduct = state.find(
        (product) => product.id === action.payload.id
      );
      targetProduct.isFavorite = !targetProduct.isFavorite;
    },
  },
});

export default productSlice;
