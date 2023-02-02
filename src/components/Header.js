import React from 'react'
import Logo from '../images/logo.png'

function Header() {
  return (
    <header>
        <div>
            <img src={Logo} alt={"Little Lemon"} width={400} height={100} />
        </div>
    </header>
  )
}

export default Header