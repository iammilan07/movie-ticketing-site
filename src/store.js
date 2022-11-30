import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./redux/increment/Numberslice";
export const store = configureStore({
  reducer: {
    wishlist: numberReducer,
  },
});
