import { createSlice } from "@reduxjs/toolkit";
import { storageKey } from "../../constants";

const initialState = {
  watch: JSON.parse(localStorage.getItem(storageKey)) || [],
};

export const Wishlistslice = createSlice({
  name: "numberchanger",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const newState = [...state.watch, action.payload];
      localStorage.setItem(storageKey, JSON.stringify(newState));
      state.watch = newState;
    },
    removeWishList: (state, action) => {
      // const newState = [...state.watch, action.payload];
      // localStorage.Item(storageKey, JSON.stringify(newState));
      state.watch = state.watch.filter((movie) => movie.id !== action.payload);
    },
    incrementer: (state) => {
      state.value = state.value += 1;
    },
  },
});

export const { addToWishList, removeWishList, incrementer } =
  Wishlistslice.actions;
export default Wishlistslice.reducer;
