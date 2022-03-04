import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import Store from "./Redux/Store";
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
