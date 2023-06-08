import React from "react";

export const InputInfoProv = (props) => {
  return (
    <div className="user-info">
      <span>props.titulo</span>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
};
