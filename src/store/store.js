import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import bookReducer from "../features/bookSlice";
import prefReducer from "../features/prefSlice";

const rootReducer = combineReducers({
  book: bookReducer,
  preference: prefReducer,
});
const persistConfig = {
  key: "root",
  storage: storage.default ?? storage,
  whitelist: ["book", "preference"], // যেগুলো persist করতে চাও
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
