import React from 'react'
import "./Login.css"

export const Login = () => {
  return (
    <div className="view">
        <div className="container">
            <div className="login-text">
                <h1>Login</h1>
            </div>
            <div className="inputs-login">
                <input type="text" id='username' className='user-name' placeholder='Username:' />
                <input type="text" id='password' className='pass-word' placeholder='Password:' />
            </div>
            <div className="button-login">
                <button>Login</button>
            </div>
        </div>
        <div className="draw-container">
            <img src="./src/assets/images/HamburguesaLogin.png" className='i1' alt="no furulo we" />
            <img src="./src/assets/images/HamburguesaLogin.png" className='i2' alt="no furulo we" />
            <img src="./src/assets/images/HamburguesaLogin.png" className='i3' alt="no furulo we" />
            <img src="./src/assets/images/draw.png" className='draw' alt="no furulo we" />
        </div>
    </div>
  )
}
