import React from 'react'
import { useState } from "react";
import "../styles/Nav.css"
import HamburgerMenuIconOpen from "../images/hamburger-menu-open.svg";
import HamburgerMenuIconClose from "../images/hamburger-menu-close.svg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <nav className={`navigation-container ${isMenuOpen ? "navigation-menu-open" : ""}`}>
        <menu>
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">MENU</a></li>
          <li><a href="">RESERVATIONS</a></li>
          <li><a href="">ORDER ONLINE</a></li>
          <li><a href="">LOGIN</a></li>
        </menu>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <img src={HamburgerMenuIconClose} alt="" /> : <img src={HamburgerMenuIconOpen} alt="" />}
      </button>
    </>
  )
}

export default Nav