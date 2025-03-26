import EmergencyHelp from "../models/emergencyHelpModel.js";

export const triggerEmergencyAlert = async (data) => {
    try {
        console.log("📌 Saving Emergency Help Request:", data);

        const newRequest = new EmergencyHelp(data);
        await newRequest.save();

        console.log("✅ Emergency Help Request Saved Successfully!", newRequest);
        return { message: "Emergency help request sent successfully", data: newRequest };
    } catch (error) {
        console.error("❌ Emergency Help Save Error:", error.message);
        throw error;
    }
};
