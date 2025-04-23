import React from 'react'
import './Button.css'

const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button
      className={`shared-button shared-button-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
