import React from "react"

const TourCard = ({ title, description, price, deposit }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Price: £{price}</p>
        <p className="card-text">Deposit: £{deposit}</p>
      </div>
    </div>
  )
}

export default TourCard