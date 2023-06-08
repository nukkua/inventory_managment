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

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 27 },
    { id: 2, name: "Jane Doe", email: "jane@example.com", age: 25 },
    // Más usuarios aquí...
  ];
  return (
    <div className="platosmasvendidos-container">
      <TableItems
        title="Empleados"
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
