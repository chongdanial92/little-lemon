import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../../api/api";

describe("Booking Form", () => {
    test("Render the Booking Form", () => {
        expect.assertions(5);

        const availableTimes = fetchAPI(new Date());
        const occasions = ["Birthday", "Anniversary"];
        const isLoading = false;
        const submitAPI = jest.fn();

        render(
            <BookingForm
                availableTimes={availableTimes}
                occasions={occasions}
                isLoading={isLoading}
                submitAPI={submitAPI}
            />
        );

        expect(screen.getByText("Choose Date")).toBeInTheDocument();
        expect(screen.getByText("Choose Time")).toBeInTheDocument();
        expect(screen.getByText("Number of Guests")).toBeInTheDocument();
        expect(screen.getByText("Occasion")).toBeInTheDocument();
        expect(screen.getByText("Submit")).toBeInTheDocument();
    })

    test("Display error message when submit button is pressed without filling up form", async () => {
        expect.assertions(5);

        const availableTimes = fetchAPI(new Date());
        const occasions = ["Birthday", "Anniversary"];
        const updateTimes = jest.fn();
        const isLoading = false;
        const submitAPI = jest.fn();

        render(
            <BookingForm
                availableTimes={availableTimes}
                occasions={occasions}
                updateTimes={updateTimes}
                isLoading={isLoading}
                submitAPI={submitAPI}
            />
        );

        await fireEvent.click(screen.getByText("Submit"));

        await waitFor(() => {
            expect(screen.getByText("Please select a date")).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText("Please select a time")).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText("Please select at least 1 guest")).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText("Please select an occasion")).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(submitAPI).not.toHaveBeenCalled();
        });
    })

    test("Able to Submit Form Successfully after fill up all form properly", async () => {
        const availableTimes = fetchAPI(new Date());
        const occasions = ["Birthday", "Anniversary"];
        const updateTimes = jest.fn();
        const isLoading = false;
        const submitAPI = jest.fn();

        render(
            <BookingForm
                availableTimes={availableTimes}
                occasions={occasions}
                updateTimes={updateTimes}
                isLoading={isLoading}
                submitAPI={submitAPI}
            />
        );

        const dateString = "2023-02-11";

        fireEvent.change(screen.getByLabelText("Choose Date"), {
            target: { value: dateString },
        });
        fireEvent.change(screen.getByLabelText("Choose Time"), {
            target: { value: "17:00" },
        });
        fireEvent.change(screen.getByLabelText("Number of Guests"), {
            target: { value: 4 },
        });
        fireEvent.change(screen.getByLabelText("Occasion"), {
            target: { value: "Birthday" },
        });

        fireEvent.click(screen.getByText("Submit"));

        await waitFor(() => {
            expect(submitAPI).toHaveBeenCalledWith({
                date: dateString,
                time: "17:00",
                guests: 4,
                occasion: "Birthday",
            });
        });
    })
})