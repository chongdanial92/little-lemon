import React from 'react'
import "../../styles/SpecialCard.css"
import Scooter from "../../images/scooter.png";

function SpecialCard({image, title, price, description}) {
  return (
    <article className='card'>
        <div className='card-image-container'>
            <div className='card-image' style={{backgroundImage: `url(${image})`}}>
            </div>
        </div>
        <div className='card-text'>
            <div className='card-intro'>
                <span className='card-title'>{title}</span>
                <span className='card-price'>${price}</span>
            </div>
            <p className='card-description'>{description}</p>
            <div>
                Order a Delivery
                <img className='card-delivery' src={Scooter} alt="" />
            </div>
        </div>
    </article>
  )
}

export default SpecialCard