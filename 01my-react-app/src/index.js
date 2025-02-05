import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// main entry point is this file
// react khudka apna ek DOM banata hai(virtual DOM).. ek tree structure
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
