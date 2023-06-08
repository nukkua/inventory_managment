import React from "react";
import "./TableItems.css";

const Table = ({ data, columns, title }) => {
  return (
    <div className="table-container-main">
      <h3>{title}</h3>
      <div className="table-only">
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="table-row" key={index}>
                {columns.map((column) => (
                  <td key={column.accessor}>{item[column.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
