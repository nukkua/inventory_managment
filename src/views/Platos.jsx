import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Buttons from '../components/Buttons';
import BotonFoot from '../components/BotonFoot';
import './Platos.css';

const Platos = () => {
  const data = [
    { 
      platos: 'Papas Fritas', 
      precio: 7+' bs', 
      venta: 301+' bs', 
      cant:43, 
      disp:'-'
    },
    { 
      platos: 'Hamburguesa', 
      precio: 10+' bs', 
      venta: 0+' bs', 
      cant:0, 
      disp:'-' 
    },
    { 
      platos: 'Trancapecho', 
      precio: 20+' bs', 
      venta: 180+' bs', 
      cant:38, 
      disp: '-' 
    },
    { 
      platos: ' Pollo 3/4', 
      precio: 50+' bs', 
      venta: 0+' bs', 
      cant:0, 
      disp: '-' },
    { platos: 'Pollo 1/2', precio: 53+' bs', venta: 265+' bs', cant:5, disp: '-' },
    { platos: 'Pollipapa', precio: 60+' bs', venta: 600+' bs', cant:10, disp: '-' },
    { platos: 'SalchiPollo', precio: 30+' bs', venta: 1677+' bs', cant:43, disp: '-' },
    { platos: 'Salchi papa', precio: 20+' bs', venta: 60+' bs', cant:3, disp: '-' },

  ];
 

  return (
    <TableContainer component={Paper} className="cont">
      <Buttons/>
      <div className='titulo'>Platos</div>
      <Table className='tabla-container'>
        <TableHead>
          <TableRow>
            <TableCell className='cabecera'>Platos</TableCell>
            <TableCell className='cabecera'>
                Precio
            </TableCell>
            <TableCell className='cabecera'>Ventas</TableCell>
            <TableCell className='cabecera'>Cantidad</TableCell>
            <TableCell className='cabecera'>Dispoibilidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className='cell-t'>{row.platos}</TableCell>
              <TableCell className='cell-t'>{row.precio}</TableCell>
              <TableCell className='cell-t'>{row.venta}</TableCell>
              <TableCell className='cell-t'>{row.cant}</TableCell>
              <TableCell className='cell-t'>{row.disp}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <BotonFoot/>
    </TableContainer>
  );
}

export default Platos;