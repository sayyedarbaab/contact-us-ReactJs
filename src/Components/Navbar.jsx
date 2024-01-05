import React from 'react'
import style from './navbar.module.css'

function Navbar() {
  return (
    <div className={`${style.container} container`}>
      <nav className={style.navigation}>
        <div className={style.logo}>
        <img src='/images/codelogo.jpg' alt='logo'/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
