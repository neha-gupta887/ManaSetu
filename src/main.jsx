import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { AgentProvider } from "./context/AgentContext";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ThemeProvider>

      <AgentProvider>

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,

            style: {
              background: "#ffffff",
              color: "#111827",
              borderRadius: "12px",
              padding: "16px",
              fontWeight: "600",
            },

            success: {
              iconTheme: {
                primary: "#10B981",
                secondary: "#ffffff",
              },
            },

            error: {
              iconTheme: {
                primary: "#EF4444",
                secondary: "#ffffff",
              },
            },
          }}
        />

        <App />

      </AgentProvider>

    </ThemeProvider>

  </React.StrictMode>
);