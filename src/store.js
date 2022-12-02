import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./redux/increment/Numberslice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const persistConfig = {
  key: "wishlist",
  storage,
};
console.log(persistConfig);
const persistedReducer = persistReducer(persistConfig, numberReducer);
export const store = configureStore({
  reducer: {
    wishlist: numberReducer,
    persist: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
