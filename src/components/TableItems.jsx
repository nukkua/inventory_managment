import React from "react";
import "./TableItems.css";

const Table = ({ users, title }) => {
  return (
    <div className="table-container-main">
      <h3>{title}</h3>
      <div className="table-only">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="table-row" key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
