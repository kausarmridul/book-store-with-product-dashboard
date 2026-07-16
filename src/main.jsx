import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontendLayout from "./layouts/FrontendLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Products from "./pages/admin/Products.jsx";
import Home from "./pages/home/Home.jsx";
import Shop from "./pages/shop/Shop";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontendLayout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
