import Station from "../models/Station.js";

// ✅ Get all stations
export const fetchAllStations = async () => {
  return await Station.find();
};

// ✅ Fetch station by name (case-insensitive search added)
export const fetchStationByName = async (name) => {
  return await Station.findOne({ name: new RegExp(`^${name}$`, "i") });
};

// ✅ Get AR Navigation Data
export const fetchARNavigationData = async (name) => {
  const station = await Station.findOne({ name: new RegExp(`^${name}$`, "i") });
  return station ? station.arData : null;
};

// ✅ Add new station
export const createStation = async (stationData) => {
  const newStation = new Station(stationData);
  return await newStation.save();
};
