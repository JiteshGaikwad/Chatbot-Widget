import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import widgetReducer from "../Widget/widgetSlice";
import messageReducer from "../Widget/WidgetLayout/Messages/messageSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const reducers = combineReducers({
  widgetState: widgetReducer,
  messageState: messageReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
