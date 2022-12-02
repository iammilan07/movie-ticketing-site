import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watch: [],
  value: 0,
};

export const Numberslice = createSlice({
  name: "numberchanger",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.watch = [...state.watch, action.payload];
    },
    removeWishList: (state, action) => {
      state.watch = state.watch.filter((movie) => movie.id !== action.payload);
    },
    incrementer: (state) => {
      state.value = state.value += 1;
    },
  },
});

export const { addToWishList, removeWishList, incrementer } =
  Numberslice.actions;
export default Numberslice.reducer;
