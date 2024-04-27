import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//https://v2.chakra-ui.com/
import { ChakraProvider } from "@chakra-ui/react";
// https://v2.chakra-ui.com/docs/styled-system/color-mode
import { extendTheme } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
