import React from 'react';
import TablaPrecio from './Components/TablaPrecio'
import './App.css';

function App() {
  return (
    <div>
      <h1></h1>
      <TablaPrecio />
    </div>
  );
}

export default App;

/* import React from 'react'
import MaterialTable from '@mui/material'
import './App.css'
const datos = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'María', edad: 30 },
  { id: 3, nombre: 'Pedro', edad: 28 },
  { id: 4, nombre: 'Laura', edad: 35 },
];

function App() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato) => (
          <tr key={dato.id}>
            <td>{dato.id}</td>
            <td>{dato.nombre}</td>
            <td>{dato.edad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
}

export default App */
