import React from 'react'
import styleButton from './button.module.css'

function Button({icon,text}) {
  return (
    <div className={styleButton.primary_btn}>
      {icon}
      {text}
    </div>
  )
}

export default Button