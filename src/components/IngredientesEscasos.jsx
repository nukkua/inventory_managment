import React from "react";
import './IngredientesEscasos.css'
import TableItems from './TableItems';

const IngredientesEscasos = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 27 },
    { id: 2, name: "Jane Doe", email: "jane@example.com", age: 25 },
    // Más usuarios aquí...
  ];
  return (
    <div className="ingredientesescasos-container">
      <TableItems users={users} title={"Ingredientes Escasos"} />
    </div>
  );
};

export default IngredientesEscasos;
