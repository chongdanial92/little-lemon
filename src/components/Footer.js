import React from 'react'
import FooterLogo from "../images/logo-vertical-white.png"
import "../styles/Footer.css"
import FacebookIcon from "../images/facebook-icon.png"
import InstagramIcon from "../images/instagram-icon.png"
import WhatsappIcon from "../images/whatsapp-icon.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={FooterLogo} alt="Little Lemon" />
        </div>
        <div className="links-container">
          <div className="links-block">
            <p>Site Map</p>
            <menu>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>

            </menu>

          </div>
          <div className="links-block">
            <p>Contact</p>
            <menu>
              <li>
                <p>
                7, Somerland Street, Chicago
              </p>
              </li>
              <li>
                <p>231-344-5645</p>
              </li>
              <li>
                <p>enquiry@little-lemon.com</p>
              </li>
            </menu>
          </div>
          <div className='links-block'>
          <p>Social Media</p>
          <div>
            <img src={FacebookIcon} alt="Little Lemon Facebook Page"/>
            <img src={WhatsappIcon} alt="Little Lemon Whatsapp Page"/>
            <img src={InstagramIcon} alt="Little Lemon Instagram Page"/>
          </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer