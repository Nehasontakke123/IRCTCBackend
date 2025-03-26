import Booking from "../models/bookingModel.js";
import { predictFare } from "../services/fareService.js"; // ✅ AI Prediction Import

export const bookTicket = async (bookingData) => {
    try {
        if (!bookingData.userId) throw new Error("User ID is required");
        if (!bookingData.trainName || !bookingData.trainNumber) throw new Error("Train details missing");
        if (!bookingData.passengers || bookingData.passengers.length === 0) throw new Error("At least one passenger is required");

        // ✅ AI-Powered Fare Prediction
        const baseFare = 500; // Example Base Fare (Dynamic करू शकतेस)
        const demandFactor = 1.2; // Example Demand Factor
        const finalFare = predictFare(baseFare, demandFactor); // 🎯 AI Fare Calculation

        const newBooking = new Booking({ ...bookingData, finalFare });
        await newBooking.save();
        
        return { message: "Ticket booked successfully", booking: newBooking };
    } catch (error) {
        throw new Error(error.message);
    }
};



// ✅ `getBookingsByUser` function properly export कर
export const getBookingsByUser = async (userId) => {
    return await Booking.find({ userId });
};