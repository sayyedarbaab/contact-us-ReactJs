import React from 'react'
import styled from './header.module.css'

function Header() {
  return (
    <div className={`container ${styled.contact_section}`}>
    <h1>Contact us</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
    </p>      
    </div>
  )
}

export default Header
