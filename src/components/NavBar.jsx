import React from 'react'
import OptionsCard from './OptionsCard'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <h3>TOP BURGUER</h3>
        <OptionsCard description={"Dashboard"} iconName={"octicon:home-24"}/>
        <OptionsCard description={"Menu del dia"} iconName={"fluent:food-16-filled"}/>
        <OptionsCard description={"Platos"} iconName={"mdi:food-outline"}/>        
        <OptionsCard description={"Ingredientes"} iconName={"uil:food"}/>
        <OptionsCard description={"Reportes"} iconName={"iconoir:reports"}/>
        <OptionsCard description={"Proveedores"} iconName={"ant-design:user-outlined"}/>
        <OptionsCard description={"Ordenes"} iconName={"ph:package-light"}/>
        <OptionsCard description={"Cerrar Sesión"} iconName={"mdi:logout"}/>
    </div>
  )
}

export default NavBar