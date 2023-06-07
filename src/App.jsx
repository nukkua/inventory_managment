import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login.jsx";
import Platos from "./views/Platos.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/platos" element={<Platos />} />
      </Routes>
    </>
  );
}

export default App;
