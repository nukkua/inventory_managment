import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login.jsx";
import Platos from "./views/Platos.jsx";
import NavBar from "./views/NavBar.jsx";
import Reportes from "./views/Reportes";
import SearchBar from "./views/SearchBar";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="app-container">
        {location.pathname !== "/login" && <NavBar />}
        

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element />
          <Route path="/platos" element={<Platos />} />
          <Route path="/ingredientes" element />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/proveedores" element />
          <Route path="/ordenes" element />
        </Routes>
      </div>
    </>
  );
}

export default App;
