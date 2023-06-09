import React from "react";
import "./InputInfoProv.css"

export const InputInfoProv = (props) => {
  return (
    <div className="user-info">
      <span>{props.titulo}</span>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
};
