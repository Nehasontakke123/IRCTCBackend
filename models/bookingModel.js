import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  trainId: { type: mongoose.Schema.Types.ObjectId, ref: "Train", required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: String, required: true },
  classType: { type: String, required: true },
  quota: { type: String, required: true },
  passengers: [
    {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      gender: { type: String, required: true },
    },
  ],
  status: { type: String, default: "Pending" },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
