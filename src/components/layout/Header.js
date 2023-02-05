import React from 'react'
import Logo from '../../images/logo.png'
import "../../styles/Header.css"
import Nav from './Nav'

function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="logo">
          <img src={Logo} alt={"Little Lemon"} />
        </div>
        <Nav/>
      </div>
    </header>
  )
}

export default Header