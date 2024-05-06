import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menus from "./Pages/Menus";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menus" element={<Menus />} />
      </Routes>
    </>
  );
}

export default App;
