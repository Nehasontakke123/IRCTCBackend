import Train from "../models/Train.js";
import Booking from "../models/bookingModel.js";

// POST - Book Ticket
export const bookTicket = async (req, res) => {
  try {
    const { userId, trainId, from, to, date, classType, quota, passengers } = req.body;

    console.log("📩 Booking Request:", req.body);
    
    // ✅ Check if trainId is valid ObjectId
    if (!trainId || trainId.length !== 24) {
      return res.status(400).json({ message: "Invalid Train ID!" });
    }

    // ✅ Train Exists Check
    const train = await Train.findById(trainId);
    
    if (!train) {
      console.log("❌ Train not found for ID:", trainId);
      return res.status(404).json({ message: "Train not found!" });
    }

    console.log("✅ Train Found:", train);

    // ✅ Create New Booking
    const newBooking = new Booking({
      userId,
      trainId,
      from,
      to,
      date,
      classType,
      quota,
      passengers,
      status: "Confirmed",
    });

    await newBooking.save();
    console.log("🎉 Booking Successful:", newBooking);

    res.json({ message: "Booking Successful!", booking: newBooking });

  } catch (error) {
    console.error("❌ Error in bookTicket:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
