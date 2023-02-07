import React from 'react'
import "../../styles/Button.css"

function Button({ children, onClick, isSubmit, disabled, fullWidth }) {
  return (
    <button className={disabled ? 'btn disabled' : 'btn'} onClick={onClick} disabled={disabled} type={isSubmit && "submit"} style={fullWidth && { width: "100%" }}
    >
      {children}
    </button>
  )
}

export default Button