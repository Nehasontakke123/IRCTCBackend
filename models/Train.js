import mongoose from 'mongoose';

const trainSchema = new mongoose.Schema({
    trainName: String,
    trainNumber: String,
    from: String,
    to: String,
    departureTime: String,
    arrivalTime: String,
    travelDuration: String,
    seatAvailability: Number,
    fare: Number,
    quota: String,
    delay: Number  // delay in minutes (0 if on time)
});

export default mongoose.model('Train', trainSchema);