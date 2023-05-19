import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MantineProvider
    theme={{
      globalStyles: (theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
        body: {
          margin: 0,
          fontFamily: "Work Sans, sans-serif",
          backgroundColor: "#D2D3DA",
        },
        "#root": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        },
        colorScheme: "light",
      }),
    }}
  >
    <App />
  </MantineProvider>
);
