import React from 'react'
import StarIcon from "../../images/full-star-rating.png";
import HalfStarIcon from "../../images/half-star-rating.png";
import "../../styles/TestimonialCard.css"

function Stars({ ratings }) {
    const integerPart = Math.trunc(ratings);
    const decimalPart = Number(ratings?.toString().split(".")[1]);
    const elements = [];
  
    if (integerPart <= 0) {
      elements.push(0);
    } else {
      for (let index = 1; index <= integerPart; index++) {
        if (index > 5) {
          break;
        }
        elements.push(0);
      }
    }
  
    return (
      <div className="starsContainer">
        {elements.map((x, index) => (
            <img key={index} src={StarIcon} alt="" className='star-rating-icon'/>
        ))}
        {integerPart < 5 && decimalPart > 0 && <img src={HalfStarIcon} alt="" className='star-rating-icon'/>
}
      </div>
    );
  }

function TestimonialCard({image, name, ratings, quote}) {
  return (
    <div className="testimonial-card">
        <div className="testimonial-user-image">
            <img src={image} alt="User Testimonial" />
        </div>
        <div>
            <Stars ratings={ratings} />
            <span className="testimonial-user-rating">{ratings}</span>
        </div>
        <div>
            <blockquote>{quote}</blockquote>
            <figcaption className="testimonial-user-caption">&mdash; {name}</figcaption>
        </div>
        </div>
  )
}

export default TestimonialCard