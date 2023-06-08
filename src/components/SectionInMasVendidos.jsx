import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Boton from './ButtonReports';
import './SectionInMasVendidos.css'
const SectionInMasVendidos = () => {
  const data = [
    {
      platos: "Papas Fritas",
      cantidad: 12,
      tiempo: 10 + " minutos",
    },
    {
      platos: "Silpancho",
      cantidad: 15,
      tiempo: 15 + " minutos",
    },
    {
      platos: "Trancapecho",
      cantidad: 17,
      tiempo: 10 + "minutos",
    },
    {
      platos: "Salchipapa",
      cantidad: 1,
      tiempo: 8 + "minutos",
    },
  ];
  return (
    <TableContainer component={Paper} className="table-container">
      <Boton />
      <div className="titulo">Platos mas vendidos</div>
      <Table className="tabla-container">
        {/* cabecera */}
        <TableHead>
          <TableRow>
            <TableCell className="cabecera">Platos</TableCell>
            <TableCell className="cabecera"> Cantidad restante</TableCell>
            <TableCell className="cabecera">Tiempo de preparacion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow className="table-row" key={row.platos + index}>
              <TableCell className="cell-t">{row.platos}</TableCell>
              <TableCell className="cell-t">{row.cantidad}</TableCell>
              <TableCell className="cell-t">{row.tiempo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SectionInMasVendidos;
