import React, { useEffect, useState } from "react";
import "./PlatosMasVendidos.css";

import TableItems from "./TableItems";
import { getJson } from "../services/Response";

const PlatosMasVendidos = () => {
  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    getJson("/empleados").then((data) => {
      setEmpleados(data);
    });
  }, []);

  return (
    <div className="platosmasvendidos-container">
      <TableItems
        title="Platos mas vendidos"
        data={empleados}
        columns={[
          { header: "Contrasena", accessor: "contrasena" },
          { header: "Id", accessor: "id_empleado" },
          { header: "Nombre", accessor: "nombre" },
          { header: "Rol", accessor: "rol" },
          { header: "Usuario", accessor: "usuario" },
        ]}
      />
    </div>
  );
};

export default PlatosMasVendidos;
