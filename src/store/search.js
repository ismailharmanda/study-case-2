import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = { term: "" };

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    search(state, action) {
      state.term = action.payload;
    },
  },
});

export default searchSlice;
