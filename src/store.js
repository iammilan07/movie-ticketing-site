import { configureStore } from "@reduxjs/toolkit";
import Wishlistslice from "./redux/wishlist/Wishlistslice";

export const store = configureStore({
  reducer: {
    wishlist: Wishlistslice,
  },
});
