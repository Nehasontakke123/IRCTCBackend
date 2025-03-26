import { predictFareLogic, saveFareData } from "../services/fareService.js";

/**
 * 🎯 Predicts the fare dynamically based on demand.
 */
export const predictFareController = async (req, res) => {
  try {
    const { source, destination, date } = req.query;

    if (!source || !destination || !date) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const predictedFare = await predictFareLogic(source, destination, date);
    
    res.status(200).json({ success: true, predictedFare });
  } catch (error) {
    console.error("Error in predictFareController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

/**
 * 🎯 Stores the fare data in the database.
 */
export const saveFareController = async (req, res) => {
  try {
    const { trainNumber, baseFare, demandFactor } = req.body;

    if (!trainNumber || !baseFare || !demandFactor) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const savedFare = await saveFareData(trainNumber, baseFare, demandFactor);

    res.status(201).json({ success: true, message: "Fare data saved successfully", fare: savedFare });
  } catch (error) {
    console.error("Error in saveFareController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
