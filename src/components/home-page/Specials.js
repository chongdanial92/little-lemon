import React from 'react'
import SpecialCard from './SpecialCard';
import SpecialImage1 from "../../images/greek-salad.jpg"
import SpecialImage2 from "../../images/bruchetta.svg"
import SpecialImage3 from "../../images/lemon-dessert.jpg"
import "../../styles/Specials.css"
import Button from "../../components/ui/Button"

const specialDishes = [
    {
      id: "d1",
      image: SpecialImage1,
      title: "Greek Salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: "d2",
      image: SpecialImage2,
      title: "Bruchetta",
      price: 5.99,
      description:
        "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: "d3",
      image: SpecialImage3,
      title: "Lemon Dessert",
      price: 5.00,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

function Specials() {
  return (
    <section>
        <div className='specials-container'>
        <div className='specials-intro'>
            <h2 className='specials-intro-label'>This Week's Specials</h2>
            <Button>Online Menu</Button>
        </div>
        <div className='specials-dish-collection'>
            {
                specialDishes.map((item, index)=>{
                    return <SpecialCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    />
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Specials