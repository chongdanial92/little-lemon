import React from 'react'
import { useEffect, useState, useReducer } from 'react'
import BookingForm from './BookingForm'
import useSubmit from "../../hooks/useSubmit";
import "../../styles/BookingPage.css"
import { fetchAPI } from "../../api/api";
import { useAlertContext } from '../../context/alert-context';

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "update-times":
            return fetchAPI(new Date(action.payload));
        case "reset-times":
            return fetchAPI(new Date());
        default:
            return state;
    }
};

export const initializeTimes = () => fetchAPI(new Date());

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [occasions, setOccasions] = useState(["Birthday", "Anniversary"]);
    const { isLoading, response, submitAPI } = useSubmit();
    const [isFormDisplay, setIsFormDisplay] = useState(true);
    const { onOpen } = useAlertContext();

    const updateTimesHandler = (e) => {
        dispatch({ type: "update-times", payload: e.target.value });
    };

    useEffect(() => {
        if (response) {
            if (response.type === "success") {
                dispatch({ type: "reset-times" });
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                setIsFormDisplay(false);
            }
            onOpen(response.type, response.message);
        }
    }, [response]);

    return (
        <>
            <section className='booking-form-section'>
                <div className='booking-form-container'>
                    <h2>Please fill up the form to book a table</h2>
                    {isFormDisplay ?
                        <BookingForm
                            availableTimes={availableTimes}
                            isLoading={isLoading}
                            occasions={occasions}
                            updateTimes={updateTimesHandler}
                            submitAPI={submitAPI}
                        /> :
                        <h2>Reservations is Made asshole</h2>
                    }
                </div>
            </section>
        </>
    )
}

export default BookingPage