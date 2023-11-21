import React from "react";
import "./App.scss";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Sets from "./pages/Sets";
import Drinks from "./pages/Drinks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
