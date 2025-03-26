import mongoose from "mongoose";

const OfflineBookingSchema = new mongoose.Schema({
    trainName: { type: String, required: true },
    trainNumber: { type: String, required: true },
    destination:{type: String, required: true },
    date: { type: String, required: true },
    seatClass: { type: String, required: true },
    passengers: { type: Array, required: true },
    status: { type: String, default: "pending" } 
});

export default mongoose.model("OfflineBooking", OfflineBookingSchema);
