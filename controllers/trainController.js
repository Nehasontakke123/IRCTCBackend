import { getBestRoute, predictFare, checkDelays } from "../services/trainServices.js";
import  Train  from "../models/Train.js";

// 🔍 Search Trains Controller
export const searchTrains = async (req, res) => {
  try {
    const { from, to, date, classType, quota } = req.query;

    let trains = await Train.find({ from, to, quota });

    if (trains.length === 0) {
      const alternativeRoute = await getBestRoute(from, to);
      return res.status(404).json({ message: "No direct train found!", alternativeRoute });
    }

    trains = await Promise.all(
      trains.map(async (train) => ({
        ...train._doc,
        farePrediction: await predictFare(train.fare),
        realTimeDelay: await checkDelays(train.trainNumber),
      }))
    );

    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// 🚆 Get All Trains
export const getTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};



// ✅ Train Insert Function
export const addTrain = async (req, res) => {
    try {
        const train = new Train(req.body);
        await train.save();
        res.status(201).json({ message: "Train added successfully!", train });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

