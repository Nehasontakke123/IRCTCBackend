import mongoose from "mongoose";

const FareSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true },
  baseFare: { type: Number, required: true },
  demandFactor: { type: Number, required: true },
  finalFare: { type: Number, required: true },
});

const Fare = mongoose.model("Fare", FareSchema);
export default Fare;
