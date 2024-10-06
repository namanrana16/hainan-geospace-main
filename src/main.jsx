import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Blog from "./components/Blog";
import App from "./App.jsx";
import Roadmap from "./components/Roadmap.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={ <App />} />
        <Route path="/roadmap" element={ <Roadmap />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
