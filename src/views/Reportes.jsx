import React from "react";
import SectionInEscasos from "../components/SectionInEscasos";
import SectionInMasVendidos from "../components/SectionInMasVendidos";
import "./Reportes.css";

const Reportes = () => {
  return (
    <div className="contenedor">
      <SectionInEscasos/>
      <SectionInMasVendidos/>
    </div>
  );
};

export default Reportes;
