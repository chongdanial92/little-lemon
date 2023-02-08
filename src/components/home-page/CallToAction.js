import React from 'react'
import CallToActionImage from "../../images/call-to-action.jpg";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import "../../styles/CallToAction.css";

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
                        <Button>
                            <Link to="/booking">Reserve a Table</Link>
                        </Button>
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