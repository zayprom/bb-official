import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./queries.css";
import Terms from "./routes/obchodni-podminky";
import ReturnPolicy from "./routes/vraceni-a-reklamace";
import PrivacyPolicy from "./routes/ochrana-osobnich-udaju";
import Error from "./routes/error";
import Faq from "./routes/casto-kladene-dotazy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="obchodni-podminky" element={<Terms />} />
        <Route path="vraceni-a-reklamace" element={<ReturnPolicy />} />
        <Route path="ochrana-osobnich-udaju" element={<PrivacyPolicy />} />
        <Route path="casto-kladene-dotazy" element={<Faq />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
