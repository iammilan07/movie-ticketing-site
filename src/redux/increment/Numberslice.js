import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "Add To WatchList",
  watch: [],
};

export const Numberslice = createSlice({
  name: "numberchanger",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      // const find = state.watch.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (find > 0) {
      //   state.watch[find].value += 1;
      // } else {
      //   const tempvar = { ...action.payload, value: 1 };
      //   state.watch.push(tempvar);
      // }
      // state.watch.push(action.payload);
      state.watch = [...state.watch, action.payload];
    },
    removeWishList: (state, action) => {
      state.watch = state.watch.filter((movie) => movie.id !== action.payload);
    },
    nextname: (state) => {
      state.name = "Remove from watch list";
    },
    // incrementWishList: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

export const { addToWishList, removeWishList, nextname } = Numberslice.actions;
export default Numberslice.reducer;
