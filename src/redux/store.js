import { configureStore } from "@reduxjs/toolkit";
import Wishlistslice from "./wishlist/slice";

export const store = configureStore({
  reducer: {
    wishlist: Wishlistslice,
  },
});
