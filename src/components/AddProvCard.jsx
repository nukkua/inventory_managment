import React from "react";
import "./AddProvCard.css";
import { InputInfoProv } from "./InputInfoProv";
import { ButtonReu } from "./ButtonReu";

const AddProvCard = (props) => {
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
          <InputInfoProv titulo="Nombre del Proveedor" placeholder="Ingrese nombre del proveedor"/>
          <InputInfoProv titulo="Ingrediente" placeholder="Ingrese Ingrediente"/>
          <InputInfoProv titulo="Numero de contacto" placeholder="Ingrese numero de contacto"/>
          <InputInfoProv titulo="Direccion" placeholder="Ingrese la direccion emial"/>
        </div>
        <div className="buttons-prov">
          <ButtonReu nombre="Agregar Proveedor"/>
          <button className="descat-button">
              Descartar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProvCard;
