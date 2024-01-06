import React from 'react'
import styled from './header.module.css'

function Header() {
  return (
    <div className={`container ${styled.contact_section}`}>
    <h1>Contact us</h1>
    <p>Include a clear call-to-action that encourages visitors to get in touch. Use language like "Contact us today," "Send us a message," or "Get started now."
    </p>      
    </div>
  )
}

export default Header
