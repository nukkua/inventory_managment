import React, { useEffect, useState } from "react";
import TableItems from "../components/TableItems";
import { getJson } from "../services/Response";

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);
  useEffect(() => {
    getJson("/pedido_cliente").then((data) => {
      setOrdenes(data);
    });
  });
  return <div className="ordenes-container"></div>;
};

export default Ordenes;
