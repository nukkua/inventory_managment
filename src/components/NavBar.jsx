import React, { useState } from "react";
import OptionsCard from "./OptionsCard";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [activeOption, setActiveOption] = useState(null);
  return (
    <div className="navbar-container">
      <h3>TOP BURGUER</h3>
      <OptionsCard
        description={"Dashboard"}
        iconName={"octicon:home-24"}
        className={""}
        isActive={activeOption === "Dashboard"}
        onClick={() => setActiveOption("Dashboard")}
      />
      <OptionsCard
        description={"Menu del dia"}
        iconName={"fluent:food-16-filled"}
        className={""}
        isActive={activeOption === "Menu del dia"}
        onClick={() => setActiveOption("Menu del dia")}
      />
      <NavLink to={"/platos"}>
        <OptionsCard
          description={"Platos"}
          iconName={"mdi:food-outline"}
          className={""}
          isActive={activeOption === "Platos"}
          onClick={() => setActiveOption("Platos")}
        />
      </NavLink>
      <OptionsCard
        description={"Ingredientes"}
        iconName={"uil:food"}
        className={""}
        isActive={activeOption === "Ingredientes"}
        onClick={() => setActiveOption("Ingredientes")}
      />
      <OptionsCard
        description={"Reportes"}
        iconName={"iconoir:reports"}
        className={""}
        isActive={activeOption === "Reportes"}
        onClick={() => setActiveOption("Reportes")}
      />
      <OptionsCard
        description={"Proveedores"}
        iconName={"ant-design:user-outlined"}
        className={""}
        isActive={activeOption === "Proveedores"}
        onClick={() => setActiveOption("Proveedores")}
      />
      <OptionsCard
        description={"Ordenes"}
        iconName={"ph:package-light"}
        className={""}
        isActive={activeOption === "Ordenes"}
        onClick={() => setActiveOption("Ordenes")}
      />
      <NavLink to={"/login"}>
        <OptionsCard
          description={"Cerrar Sesión"}
          iconName={"mdi:logout"}
          className={"-last-option"}
          isActive={activeOption === "Cerrar Sesión"}
          onClick={() => setActiveOption("")}
        />
      </NavLink>
    </div>
  );
};

export default NavBar;
