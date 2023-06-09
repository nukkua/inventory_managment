import React, { useEffect, useState } from "react";
import './Platos.css'
import TableItems from "../components/TableItems";
import { getJson } from "../services/Response";

const Platos = () => {
  const [platos, setPlatos] = useState([]);
  useEffect(() => {
    getJson("/platos").then((data) => {
      setPlatos(data);
    });
  }, []);

  return (
    <div className="platos-container">
      <TableItems
        title="Platos"
        data={platos}
        columns={[
          { header: "Id", accessor: "id_plato" },
          { header: "Platos", accessor: "nombre" },
          { header: "Precio", accessor: "precio" },
          { header: "Tiempo de preparacion", accessor: "tiempo_preparacion" },
        ]}
        height={"700px"}
      />
    </div>
  );
};

export default Platos;
