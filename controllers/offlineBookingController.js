import { saveOfflineBooking, processOfflineBookings, fetchOfflineBookings } from "../services/offlineBookingService.js";
import OfflineBooking from "../models/offlineBookingModel.js";


export const createOfflineBooking = async (req, res) => {
    try {
        console.log("Received Data:", req.body); // Debugging line
        const response = await saveOfflineBooking(req.body);
        res.status(201).json(response);
    } catch (error) {
        console.error("Error Creating Booking:", error.message);
        res.status(400).json({ error: error.message });
    }
};


// Update Booking Status
export const updateBookingStatus = async (req, res) => {
    try {
      const { status } = req.body;
      const { id } = req.params;
  
      const updatedBooking = await OfflineBooking.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
  
      if (!updatedBooking) {
        return res.status(404).json({ error: "Booking not found!" });
      }
  
      res.json({ message: "Booking status updated successfully!", updatedBooking });
    } catch (error) {
      res.status(500).json({ error: "Failed to update booking status!" });
    }
  };







export const syncOfflineBookings = async (req, res) => {
    try {
        const { bookings } = req.body; 
        const response = await processOfflineBookings(bookings);
        res.status(200).json(response);
    } catch (error) {
        console.error("Error Syncing Bookings:", error.message);
        res.status(400).json({ error: error.message });
    }
};

export const getOfflineBookings = async (req, res) => {
    try {
        const bookings = await fetchOfflineBookings();
        res.status(200).json(bookings);
    } catch (error) {
        console.error("Error Fetching Bookings:", error.message);
        res.status(500).json({ error: error.message });
    }
};
