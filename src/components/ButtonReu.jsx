import React from 'react'
import "./ButtonReu.css"

export const ButtonReu = (props) => {
  return (
    <button className='button-reu' onClick={props.event}>
        {props.nombre}
    </button>
  )
}