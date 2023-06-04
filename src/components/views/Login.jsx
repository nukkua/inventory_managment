import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="view">
      <div className="container">
        <div className="login-text-container">
          <h1>Login</h1>
        </div>
        <div className="data-container">
          <input
            type="text"
            id="user-name"
            className="username"
            placeholder="Username:"
          />
          <input
            type="text"
            id="pass-word"
            className="password"
            placeholder="Password:"
          />
        </div>
        <div className="login-button">
          <button>Login</button>
        </div>
      </div>
      <div className="draw-container">
        <img src="./src/assets/images/HamburguesaLogin.jpg" alt="Hamburguesa" />
        <img src="./src/assets/images/HamburguesaLogin.jpg" alt="Hamburguesa" />
        <img src="./src/assets/images/HamburguesaLogin.jpg" alt="Hamburguesa" />
        <div className="draw"></div>
      </div>
    </div>
  );
};

export default Login;
