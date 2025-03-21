import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ Ensure this path is correct
import "./index.css"; // Optional: if you use global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
