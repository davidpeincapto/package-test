import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NotFound from "./pages/NotFound/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotFound message="AAAAAA" />
  </React.StrictMode>
);
