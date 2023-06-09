import React, { useEffect, useState } from "react";
import { getJson } from "../services/Response";
import TableItems from "../components/TableItems";
import "./Ingredientes.css"

const Ingredientes = () => {
  const [ingredientes, setIngredientes] = useState([]);
  useEffect(() => {
    getJson("/ingredientes").then((data) => {
      setIngredientes(data);
    });
  }, []);
  
  return (
    <div className="ingredientes-container">
      <TableItems
        title="Ingredientes"
        data={ingredientes}
        columns={[
          { header: "Id", accessor: "id_ingrediente" },
          { header: "Ingredientes", accessor: "nombre" },
          { header: "Stock", accessor: "stock" },
          { header: "Unidad de medida", accessor: "unidad_medida" },
        ]}
        height={"700px"}
      />
    </div>
  );
};

export default Ingredientes;
