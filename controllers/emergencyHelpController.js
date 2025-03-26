import EmergencyHelp from "../models/emergencyHelpModel.js";
import mongoose from "mongoose";
export const sendEmergencyAlert = async (req, res) => {
    try {
        console.log("📌 Received Emergency Request:", req.body);

        const { name, age, mobile, location, message, category } = req.body;

        // 🛑 Validate Required Fields
        if (!name || !age || !mobile || !location || !message || !category) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        let parsedLocation;

        // ✅ Convert String Location (if needed) to Object `{ lat, lng }`
        if (typeof location === "string") {
            const match = location.match(/Lat:\s*([\d.-]+),\s*Lng:\s*([\d.-]+)/);
            if (match) {
                parsedLocation = { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
            } else {
                return res.status(400).json({ error: "Invalid location format!" });
            }
        } else {
            parsedLocation = location;
        }

        // 🛑 Ensure `lat` & `lng` Exist
        if (!parsedLocation.lat || !parsedLocation.lng) {
            return res.status(400).json({ error: "Location must include lat and lng!" });
        }

        // ✅ Create Emergency Request
        const newRequest = new EmergencyHelp({
            name,
            age,
            mobile,
            location: parsedLocation, // Save as `{ lat, lng }` object
            message,
            category
        });

        // Save to MongoDB
        await newRequest.save();

        console.log("✅ Emergency Request Saved:", newRequest);
        res.status(201).json({ message: "Emergency request sent successfully", data: newRequest });

    } catch (error) {
        console.error("❌ Error Saving Emergency Request:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};








// 🛑 Fix API Response in Controller
export const getAllEmergencyRequests = async (req, res) => {
    try {
        const requests = await EmergencyHelp.find();  // 🔹 Remove `sort({ createdAt: -1 })` if needed
        console.log("📌 Fetched Emergency Requests:", requests);
        res.status(200).json(requests);
    } catch (error) {
        console.error("❌ Error Fetching Requests:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const updateEmergencyStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    console.log(`🔹 Updating Status for ID: ${id} -> ${status}`); // 🟢 Debugging

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("❌ Invalid Request ID:", id);
        return res.status(400).json({ error: "Invalid request ID" });
    }

    try {
        const request = await EmergencyHelp.findByIdAndUpdate(id, { status }, { new: true });

        if (!request) {
            console.log("❌ Emergency Request Not Found for ID:", id);
            return res.status(404).json({ error: "Emergency request not found" });
        }

        console.log("✅ Status Updated Successfully:", request);
        res.status(200).json({ message: "Status updated successfully", status: request.status });
    } catch (error) {
        console.error("❌ Error Updating Emergency Status:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};




//  Get Emergency Status
export const getEmergencyStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const request = await EmergencyHelp.findById(id);
        if (!request) {
            return res.status(404).json({ error: "Emergency request not found" });
        }

        res.status(200).json({ message: "Status fetched successfully", status: request.status });
    } catch (error) {
        console.error("❌ Error Fetching Emergency Status:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
