import React from 'react'
import "../../styles/OurStory.css"
import MarioChef from "../../images/mario-chef.jpg"
import AdrianChef from "../../images/adrian-chef.jpg"

function OurStory() {
  return (
    <section className="our-story-section">
        <div className="our-story-container">
            <h2 className="our-story-title">Our Story</h2>
            <div className="our-story-content">
                <div class="our-story-about-text">
                    <div className="display-title">Little Lemon</div>
                    <div className="display-subtitle">Chicago</div>
                    <div className="display-text">
                          <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                              ad cumque labore recusandae vero a quas repellat perferendis
                              sint? Dolorum, tempore ratione fugiat illum ullam officia
                              aliquid delectus quos! Accusantium. Lorem ipsum dolor sit amet
                              consectetur, adipisicing elit. Maxime quibusdam fugit iure
                              autem! Magnam animi laboriosam assumenda vero eos a dolores,
                              itaque repellendus fuga ab, ipsam reiciendis non vitae ut.
                          </p>
                          <p>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                              quibusdam fugit iure autem! Magnam animi laboriosam assumenda
                              vero eos a dolores, itaque repellendus fuga ab, ipsam reiciendis
                              non vitae ut.
                          </p>
                    </div>
                </div>
                <div className='images-collage'>
                      <div className="left-image-container">
                          <div>
                              <img src={MarioChef} alt="Mario Chef" />
                          </div>
                      </div>
                      <div className="right-image-container">
                          <div>
                          <img src={AdrianChef} alt="Adrian Chef" />
                          </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurStory