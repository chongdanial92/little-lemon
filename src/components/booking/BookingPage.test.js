import { render, screen } from "@testing-library/react";
import BookingPage, { initializeTimes, updateTimes } from "./BookingPage";


describe("Booking Page", () => {
    test(`Renders the heading: 'Please fill up the form to book a table'`, () => {
        expect.assertions(1);
        render(<BookingPage />);
        const headingElement = screen.getByText("Please fill up the form to book a table");
        expect(headingElement).toBeInTheDocument();
    });

    test(`initializeTimes() returns a valid array of strings e.g: ["17:00", "18:00", "19:00",  "20:00"]`, () => {
        expect.assertions(3);

        const result = initializeTimes();

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
        const isStringArray = (arr) =>
            arr.every((item) => typeof item === "string");
        expect(isStringArray(result)).toBe(true);
    })

    test(`updateTimes(state, action) returns an array of strings eg: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",] when called with an argument action = {type: "update-times", payload: "2023-01-20"}`, () => {
        expect.assertions(3);

        const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const action = { type: "update-times", payload: "2023-02-11" };
        const result = updateTimes(state, action);

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
        const isStringArray = (arr) =>
            arr.every((item) => typeof item === "string");
        expect(isStringArray(result)).toBe(true);
    });
})