import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Chart from "./components/chart"; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />  {/* Main App Route */}
      <Route path="/chart" element={<Chart />} />  {/* Chart Route */}
    </Routes>
  </Router>
);
