import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./Context/themeprovider.jsx";
import ProductList from "./Context/ProductList.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ProductList>
      <App />
    </ProductList>
  </ThemeProvider>,
);
