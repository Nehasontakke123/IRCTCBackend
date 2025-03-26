import express from "express";
import {
    sendEmergencyAlert,
    getAllEmergencyRequests,
    updateEmergencyStatus,
    getEmergencyStatus
} from "../controllers/emergencyHelpController.js";

const emergencyHelpRoutes = express.Router();

// Route to send an emergency alert
emergencyHelpRoutes.post("/send", sendEmergencyAlert);

// Route to fetch all emergency requests
emergencyHelpRoutes.get("/requests", getAllEmergencyRequests);

// Route to update emergency request status
emergencyHelpRoutes.put("/status/:id", updateEmergencyStatus);

// Route to get emergency request status
emergencyHelpRoutes.get("/status/:id", getEmergencyStatus);

export default emergencyHelpRoutes;

