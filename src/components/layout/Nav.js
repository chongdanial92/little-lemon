import React from 'react'
import { useState } from "react";
import HamburgerMenuIconOpen from "../../images/hamburger-menu-open.svg";
import HamburgerMenuIconClose from "../../images/hamburger-menu-close.svg";
import { Link } from "react-router-dom";
import "../../styles/Nav.css"

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <nav className={`navigation-container ${isMenuOpen ? "navigation-menu-open" : ""}`}>
        <menu>
          <li onClick={toggleMenu}><Link to="/">Home</Link></li>
          <li onClick={toggleMenu}><Link to="/">About</Link></li>
          <li onClick={toggleMenu}><Link to="/">Menu</Link></li>
          <li onClick={toggleMenu}><Link to="/booking">Reservations</Link></li>
          <li onClick={toggleMenu}><Link to="/">Order Online</Link></li>
          <li onClick={toggleMenu}><Link to="/">Login</Link></li>
        </menu>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <img src={HamburgerMenuIconClose} alt="" /> : <img src={HamburgerMenuIconOpen} alt="" />}
      </button>
    </>
  )
}

export default Nav