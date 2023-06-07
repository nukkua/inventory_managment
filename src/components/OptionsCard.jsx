import React from "react";
import { Icon } from "@iconify/react";
import "./OptionsCard.css";

const OptionsCard = ({ description, iconName }) => {
  return (
    <div className="options-card">
      <Icon className="icons" icon={iconName} />
      <span>{description}</span>
    </div>
  );
};

export default OptionsCard;
