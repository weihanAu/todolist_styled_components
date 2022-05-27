import React from 'react'
import {ButtonStyled} from './buttonStyle'

const Button = (props) => {


  return (
    <>
    <ButtonStyled primary={props.primary} onClick={props.onClick}>{props.name}</ButtonStyled>
    </>
  )
}

export default Button