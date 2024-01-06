import React from 'react'
import styleButton from './button.module.css'

function Button({isOutline,icon,text,...rest}) {
  return (
    <button {...rest} 
    className={isOutline ? styleButton.outline_btn :styleButton.primary_btn }>
      {icon}
      {text}
    </button>
  )
}

export default Button