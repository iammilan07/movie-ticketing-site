import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* loading={<Loader />} */}
        <App />
      </PersistGate>
    </Provider>
  </ChakraProvider>
);
