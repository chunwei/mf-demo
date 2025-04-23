import React from 'react'
import './Card.css'

const Card = ({ title, children }) => {
  return (
    <div className="shared-card">
      {title && <div className="shared-card-header">{title}</div>}
      <div className="shared-card-body">{children}</div>
    </div>
  )
}

export default Card
