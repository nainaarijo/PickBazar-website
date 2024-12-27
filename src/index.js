import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./components/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root element using createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
