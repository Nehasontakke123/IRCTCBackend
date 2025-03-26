import express from "express";
import { createOfflineBooking, syncOfflineBookings, getOfflineBookings, updateBookingStatus } from "../controllers/offlineBookingController.js";

const offlineBookingRoutes = express.Router();

offlineBookingRoutes.post("/create", createOfflineBooking);
offlineBookingRoutes.post("/sync", syncOfflineBookings);
offlineBookingRoutes.put("/update-status/:id", updateBookingStatus);
offlineBookingRoutes.get("/all", getOfflineBookings); // Get all offline bookings

export default offlineBookingRoutes;
