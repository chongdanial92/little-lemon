import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    Spinner
} from "@chakra-ui/react";
import Button from "../ui/Button"
import "../../styles/BookingForm.css"

function BookingForm({ availableTimes, occasions, updateTimes, isLoading, submitAPI }) {

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: "",
            occasion: ""
        },
        onSubmit: (values) => {
            submitAPI(values)
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Please select a date"),
            time: Yup.string().required("Please select a time"),
            guests: Yup.number().min(1, "Please select between 1 to 10")
                .max(10, "Please select between 1 to 10")
                .required("Please select at least 1 guest"),
            occasion: Yup.string().required("Please select an occasion")
        })
    })

    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                <FormLabel htmlFor="date" fontWeight={600}>Choose Date</FormLabel>
                <Input id="date" name="date" type="date" value={formik.values.date} onBlur={formik.handleBlur} onChange={(e) => {
                    updateTimes(e);
                    formik.handleChange(e);
                }} />
                <FormErrorMessage>
                    {formik.errors.date && (
                        <div className="error-message">
                            {formik.errors.date}
                        </div>
                    )}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                <FormLabel htmlFor="date" fontWeight={600}>Choose Time</FormLabel>
                <Select id="time" name="time" placeholder="Select a time" {...formik.getFieldProps("time")}>
                    {availableTimes.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </Select>
                <FormErrorMessage>
                    {formik.errors.time && (
                        <div className="error-message">
                            {formik.errors.time}
                        </div>
                    )}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                <FormLabel htmlFor="guests" fontWeight={600}>Number of Guests</FormLabel>
                <Input id="guests" name="guests" type="number" min="1" max="10" step={1}
                    {...formik.getFieldProps("guests")} />
                <FormErrorMessage>
                    {formik.errors.guests && (
                        <div className="error-message">
                            {formik.errors.guests}
                        </div>
                    )}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
                <FormLabel htmlFor="occasion" fontWeight={600}>Occasion</FormLabel>
                <Select
                    id="occasion"
                    name="occasion"
                    placeholder="Select an Occasion"
                    {...formik.getFieldProps("occasion")}
                >
                    {occasions.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </Select>
                <FormErrorMessage>
                    {formik.errors.occasion && (
                        <div className="error-message">
                            {formik.errors.occasion}
                        </div>
                    )}
                </FormErrorMessage>
            </FormControl>
            <div className="booking-submit-button">
                <Button isSubmit={true} disabled={isLoading} fullWidth={true}>
                    {isLoading ? (
                    <span style={{ display: "inline-flex", gap: "1rem" }}>
                        <Spinner size='md' color="white" />
                        Submitting
                    </span>) : ("Submit")}
                </Button>
            </div>
        </form>
    )
}

export default BookingForm