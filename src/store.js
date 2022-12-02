import { configureStore } from "@reduxjs/toolkit";
import Wishlistslice from "./redux/wishlist/slice";

export const store = configureStore({
  reducer: {
    wishlist: Wishlistslice,
  },
});
