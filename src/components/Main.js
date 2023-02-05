import React from 'react'
import CallToAction from './home-page/CallToAction'
import Specials from './home-page/Specials'
import Testimonial from './home-page/Testimonial';
import OurStory from './home-page/OurStory';
import "../styles/Main.css";

function Main() {
  return (
    <main className="main-container">
      <CallToAction />
      <Specials />
      <Testimonial />
      <OurStory />
    </main>
  )
}

export default Main