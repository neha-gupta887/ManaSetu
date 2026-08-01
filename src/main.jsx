import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { AgentProvider } from "./context/AgentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AgentProvider>
        <App />
      </AgentProvider>
    </ThemeProvider>
  </React.StrictMode>
);