import React from "react";
import "./PlatosMasVendidos.css";

import TableItems from "./TableItems";

const PlatosMasVendidos = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 27 },
    { id: 2, name: "Jane Doe", email: "jane@example.com", age: 25 },
    // Más usuarios aquí...
  ];
  return (
    <div className="platosmasvendidos-container">
      <TableItems
        title="Platos mas vendidos"
        data={users}
        columns={[
          { header: "Name", accessor: "name" },
          { header: "Email", accessor: "email" },
          { header: "Age", accessor: "age" },
        ]}
      />
    </div>
  );
};

export default PlatosMasVendidos;
