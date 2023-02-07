import React from 'react'
import TestimonialUserImage1 from "../../images/testimonial-user-1.jpg"
import TestimonialUserImage2 from "../../images/testimonial-user-2.jpg"
import TestimonialUserImage3 from "../../images/testimonial-user-3.jpg"
import TestimonialUserImage4 from "../../images/testimonial-user-4.jpg"
import "../../styles/Testimonial.css"
import TestimonialCard from './TestimonialCard'

function Testimonial() {

    const customerTestimonial = [
        {
            id: "c1",
            image: TestimonialUserImage1,
            name: "Ian Holmer",
            ratings: 4.5,
            quote: "A fantastic restaurant serving delicious mediterranean food, two thumbs up.",
        },
        {
            id: "c2",
            image: TestimonialUserImage2,
            name: "Samantha Harris",
            ratings: 5,
            quote: "A must visit restaurant if you are a foodie in Chicago, their lemon deseert is fantastic",
        },
        {
            id: "c3",
            image: TestimonialUserImage3,
            name: "Royce Butler",
            ratings: 5,
            quote: "Great restaurant, lovely food, great service. Highlgy recommended when you're in Chicago",
        },
        {
            id: "c4",
            image: TestimonialUserImage4,
            name: "Tiffany Simones",
            ratings: 4.5,
            quote: "Delicious cuisines with a variety of selection to choose from, you don't want to miss this.",
        },
    ]

  return (
    <section className="testimonial-container">
        <h2 className="testimonial-title">Testimonials</h2>
        <div className='testimonial-user-list'>
            {customerTestimonial.map((item, index)=>{
                return <TestimonialCard 
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    ratings={item.ratings}
                    quote={item.quote}
                />
            })}
        </div>
    </section>
  )
}

export default Testimonial