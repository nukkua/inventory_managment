import React from "react";
import "./AddProvCard.css";

const AddProvCard = (props) => {
  return (
    <div className="card-prov-container">
      <div className="container-info">
        <div className="top-container">
          <h2>Nuevo Proveedor</h2>
          <div className="img-prov">
            <img
              src="./src/assets/images/user.png"
              alt=""
              className="img-avatar"
            />
            <p>Cambiar Imagen</p>
          </div>
        </div>
        <div className="user-info-container">
          <div className="user-info">
            <span>Nombre del proveedor</span>
            <input type="text" placeholder="Ingrese nombre del proveedor" />
          </div>
          <div className="ingrediente-info">
            <span>Ingrediente</span>
            <input type="text" placeholder="Ingrese el ingrediente" />
          </div>
          <div className="user-contact">
            <span>Numero de contacto</span>
            <input type="text" placeholder="Ingrese el numero de contacto" />
          </div>
          <div className="user-direction">
            <span>Correo</span>
            <input type="text" placeholder="a" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProvCard;
