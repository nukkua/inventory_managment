import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login.jsx";
import TablaPrecio from "./components/TablaPrecio.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/tablaprecio" element={<TablaPrecio />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
