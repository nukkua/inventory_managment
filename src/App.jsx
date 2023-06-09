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

function App() {
  const location = useLocation();
  const notLoginPage = location.pathname !== "/login";

  return (
    <>
      {/* <div className="app-container">
        {notLoginPage && <NavBar />}
        <div className="app-content">
          {notLoginPage && <SearchBarContainer />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element />
            <Route path="/menudeldia" element />
            <Route path="/platos" element={<Platos />} />
            <Route path="/ingredientes" element />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/proveedores" element />
            <Route path="/ordenes" element />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div> */}
      <AddProvCard />
    </>
  );
}

export default App;
