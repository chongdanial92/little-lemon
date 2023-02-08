import React, { useEffect } from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../styles/ConfirmedBooking.css"

function ConfirmedBooking() {
    const navigate = useNavigate();
    const [countdownValue, setCountdownValue] = useState(15);


    useEffect(() => {
        const countdownInterval = setInterval(() => { setCountdownValue(preValue => preValue - 1) }, 1000)
        return () => {
            clearInterval(countdownInterval);
        }
    })

    useEffect(() => {
        if (countdownValue < 0) {
            navigate('/')
        }
    }, [countdownValue])

    return (
        <div className="booking-confirmed-container">
            <div>
                <div className="wrapper"> <svg className="animated-check" viewBox="0 0 24 24">
                    <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" /> </svg>
                </div>
                <p className="confirmation-message">You have successfully reserved a table</p>
            </div>
            <div className='confirmation-message-redirection'>
                <p>You will be redirect back to Home page in {countdownValue} seconds</p>
            </div>
        </div>
    )
}

export default ConfirmedBooking