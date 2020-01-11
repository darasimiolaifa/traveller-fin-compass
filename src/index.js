import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import AppInfo from "./components/AppInfo";
import ConversionForm from "./components/ConversionForm";

const App = () => {
  return (
    <div className="app-section">
      <AppInfo />
      <ConversionForm />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
