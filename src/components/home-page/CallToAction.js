import React from 'react'
import CallToActionImage from "../../images/call-to-action.jpg";
import "../../styles/CallToAction.css";
import Button from "../ui/Button";

function CallToAction() {
    return (
        <section className="section-container">
            <div className="hero-container">
                <div className="hero-text">
                    <div className="main-title">Little Lemon</div>
                    <div className="sub-title">Chicago</div>
                    <div className="text">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </div>
                    <div className="hero-action">
                    <Button>Reserve a Table</Button>
                </div>
                </div>
                <div className="hero-image">
                    <img
                        src={CallToActionImage}
                        alt="Delicious Bruschetta"
                    />
                </div>
            </div>
        </section>
    )
}

export default CallToAction