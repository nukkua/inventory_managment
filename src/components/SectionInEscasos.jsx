import React from "react";
import Boton from './ButtonReports';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './SectionInEscasos.css'

const SectionInEscasos = () => {
  const data = [
    {
      ingrediente: "Lechuga ",
      cantidad: 1,
      medida: "kg",
    },
    {
      ingrediente: "Papa",
      cantidad: 1,
      medida: "kg",
    },
    {
      ingrediente: "Tomate",
      cantidad: 2,
      medida: "kg",
    },
    {
      ingrediente: "Carne molida",
      cantidad: 1,
      medida: "kg",
    },
  ];
  return (
    <TableContainer style={{ width: '1160px' }}component={Paper} className="table-container">
      <Boton />
      <div className="titulo">Ingredientes escasos</div>
      <Table className="tabla-container">
        {/* cabecera */}
        <TableHead>
          <TableRow>
            <TableCell className="cabecera">Ingrediente</TableCell>
            <TableCell className="cabecera"> Cantidad restante</TableCell>
            <TableCell className="cabecera">Medida</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow className="table-row" key={row.ingrediente + index}>
              <TableCell className="cell-t">{row.ingrediente}</TableCell>
              <TableCell className="cell-t">{row.cantidad}</TableCell>
              <TableCell className="cell-t">{row.medida}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SectionInEscasos;
