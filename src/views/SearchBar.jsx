import React from "react";
import { Icon } from "@iconify/react";
const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <Icon icon="ic:round-search" />
      <input
        type="text"
        placeholder="Buscar producto, proveedores o ordenes"
      />
    </div>
  );
};

export default SearchBar;
