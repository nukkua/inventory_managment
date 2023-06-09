import React, { useEffect, useState } from "react";
import TableItems from "../components/TableItems";
import { getJson } from "../services/Response";
import "./Ordenes.css"

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);
  useEffect(() => {
    getJson("/platos").then((data) => {
      setOrdenes(data);
    });
  });
  return (
    <div className="ordenes-container">
      <TableItems
        title="Ordenes"
        data={ordenes}
        columns={[
          { header: "Id", accessor: "id_plato" },
          { header: "Platos", accessor: "nombre" },
          { header: "Precio", accessor: "precio" },
          { header: "Tiempo de preparacion", accessor: "tiempo_preparacion" },
        ]}
        height={"500px"}
      />
    </div>
  );
};

export default Ordenes;
