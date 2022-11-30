import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  watch: [],
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
    // incrementWishList: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

export const { addToWishList, removeWishList } = Numberslice.actions;
export default Numberslice.reducer;
