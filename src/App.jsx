<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
=======
import { useState } from "react";
import "./App.css";
import Login from "./components/views/Login";
import axios from "axios";
>>>>>>> 352841572fae1c8109d8782914d58d47b4705233

function App() {
  const [count, setCount] = useState(0);
  
  


  return (
    <>
      <Login />
    </>
  );
}

export default App;
