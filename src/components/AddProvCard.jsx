import React, { useState, useEffect } from "react";
import "./AddProvCard.css";
import { InputInfoProv } from "./InputInfoProv";
import { ButtonReu } from "./ButtonReu";
import axios from "axios";


const AddProvCard = () => {

  const[nombre, setNombre] = useState("")
  const[telefono, setTelefono] = useState("")

  const[direccion, setDireccion] = useState("")

  const upProv = async() => {
    try {
      const response = await axios.post(
        "https://flask-production-fc0d.up.railway.app/proveedores",
        {
          nombre,
          telefono,
          direccion,
        }
      );
      
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clickButton = () => {
    upProv();
  };

  return (
    <div className="card-prov-container">
      <div className="container-info">
        <div className="top-container">
          <h2>Nuevo Proveedor</h2>
          <div className="img-prov">
            <img
              src="./src/assets/images/user.png" alt="no furulo we" className="img-avatar"/>
            <p>Cambiar Imagen</p>
          </div>
        </div>
        <div className="user-info-container">
          <InputInfoProv titulo="Nombre del Proveedor" placeholder="Ingrese nombre del proveedor" id="nombre" value={nombre} onchan={(e) => setNombre(e.target.value)}/>
          <InputInfoProv titulo="Ingrediente" placeholder="Ingrese Ingrediente"/>
          <InputInfoProv titulo="Numero de contacto" placeholder="Ingrese numero de contacto" id="contacto" value={telefono} onchan={(e) => setTelefono(e.target.value)}/>
          <InputInfoProv titulo="Direccion" placeholder="Ingrese la direccion email"id="direccion" value={direccion} onchan={(e) => setDireccion(e.target.value)}/>
        </div>
        <div className="buttons-prov">
          <ButtonReu nombre="Agregar Proveedor" event= {clickButton}/>
          <button className="descat-button">
              Descartar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProvCard;