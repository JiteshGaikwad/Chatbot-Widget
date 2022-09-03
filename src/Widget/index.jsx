import { persistor, store } from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

export const Widget = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <h1 className="text-3xl text-white font-bold text-center justify-center mt-5">
          🚧 Work in Progress!!! 🚧
        </h1>
      </PersistGate>
    </Provider>
  );
};
