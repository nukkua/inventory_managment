import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login.jsx";
import Platos from "./views/Platos.jsx";
import NavBar from "./views/NavBar.jsx";
import Reportes from "./views/Reportes";
import SearchBarContainer from "./views/SearchBarContainer";
import NotFound from "./views/NotFound";
import AddProvCard from "./components/AddProvCard";
import Ingredientes from "./views/Ingredientes";
import MenuDelDia from "./views/MenuDelDia";
import Ordenes from "./views/Ordenes";

function App() {
  const location = useLocation();
  const notLoginPage = location.pathname !== "/login";

  return (
    <>
      <div className="app-container">
        {notLoginPage && <NavBar />}
        <div className="app-content">
          {notLoginPage && <SearchBarContainer />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element />
            <Route path="/menudeldia" element />
            <Route path="/menudeldia" element={<MenuDelDia/>} />
            <Route path="/platos" element={<Platos />} />
            <Route path="/ingredientes" element= {<Ingredientes/>} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/proveedores" element />
            <Route path="/ordenes" element={<Ordenes/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      
    </>
  );
}

export default App;
