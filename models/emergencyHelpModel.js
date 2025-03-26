import mongoose from "mongoose";

const emergencyHelpSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        mobile: { type: String, required: true },
        location: {
            lat: { type: Number, required: false },
            lng: { type: Number, required: false }
        },
        message: { type: String, required: true },
        category: { type: String, required: true },
        status: { type: String, enum: ["pending", "in-progress", "resolved"], default: "pending" }
    },
    { timestamps: true }
);

export default mongoose.model("EmergencyHelp", emergencyHelpSchema);

