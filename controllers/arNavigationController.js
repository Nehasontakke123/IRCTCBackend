// import Station from "../models/Station.js";

// // ✅ Get all stations
// export const getAllStations = async (req, res) => {
//   try {
//     const stations = await Station.find(); // ✅ Fetch all stations from MongoDB
//     res.status(200).json(stations);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching stations" });
//   }
// };

// // ✅ Get station by name
// export const getStationByName = async (req, res) => {
//   try {
//     const station = await Station.findOne({ name: req.params.name });
//     if (!station) {
//       return res.status(404).json({ error: "Station not found" });
//     }
//     res.status(200).json(station);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching station" });
//   }
// };

// // ✅ Get AR Navigation Data for Station
// export const getARNavigationData = async (req, res) => {
//   try {
//     const station = await Station.findOne({ name: req.params.name });
//     if (!station) {
//       return res.status(404).json({ error: "Station not found" });
//     }
//     res.status(200).json(station.arData);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching AR navigation data" });
//   }
// };

// // ✅ Add new station
// export const addStation = async (req, res) => {
//   try {
//     const newStation = new Station(req.body);
//     await newStation.save();
//     res.status(201).json(newStation);
//   } catch (error) {
//     res.status(500).json({ error: "Error adding station" });
//   }
// };



// import {
//   fetchAllStations,
//   fetchStationByName, // ✅ Case-insensitive search will be handled inside services
//   fetchARNavigationData,
//   createStation
// } from "../services/NavigationService.js";

// // ✅ Get all stations
// export const getAllStations = async (req, res) => {
//   try {
//     const stations = await fetchAllStations();
//     res.status(200).json(stations);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching stations" });
//   }
// };

// // ✅ Get station by name
// export const getStationByName = async (req, res) => {
//   try {
//     const { name } = req.params;
//     console.log("Fetching station:", name); // Debugging
    
//     const station = await Station.findOne({ name: name }); // Check if field name exists in DB

//     if (!station) {
//       return res.status(404).json({ error: "❌ Station not found" });
//     }

//     res.json(station);
//   } catch (error) {
//     console.error("❌ Error in getStationByName:", error);
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }
// };



// // ✅ Get AR Navigation Data
// export const getARNavigationData = async (req, res) => {
//   try {
//     const arData = await fetchARNavigationData(req.params.name);
//     if (!arData) {
//       return res.status(404).json({ error: "AR Navigation Data not found" });
//     }
//     res.status(200).json(arData);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching AR navigation data" });
//   }
// };

// // ✅ Add new station
// export const addStation = async (req, res) => {
//   try {
//     const newStation = await createStation(req.body);
//     res.status(201).json(newStation);
//   } catch (error) {
//     res.status(500).json({ error: "Error adding station" });
//   }
// };




import Station from "../models/Station.js";

// ✅ Get all stations
export const getAllStations = async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stations" });
  }
};

// ✅ Get station details by name
export const getStationByName = async (req, res) => {
  try {
    console.log("Station requested:", req.params.name);
    const station = await Station.findOne({ name: new RegExp(`^${req.params.name}$`, "i") });
    
    if (!station) {
      console.log("🚨 Station not found!");
      return res.status(404).json({ message: "Station not found" });
    }
    
    console.log("✅ Station found:", station);
    res.json(station);
  } catch (error) {
    console.error("❌ Error fetching station:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// ✅ Get AR Navigation Data (Example logic)
export const getARNavigationData = async (req, res) => {
  try {
    const station = await Station.findOne({ name: req.params.name });
    if (!station) {
      return res.status(404).json({ message: "Station not found" });
    }
    // Example: Sending AR-related data
    res.json({
      name: station.name,
      location: station.location,
      platforms: station.platforms,
      exits: station.exits
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching AR data" });
  }
};

// ✅ Add new station
export const addStation = async (req, res) => {
  try {
    const { name, location, platforms, exits } = req.body;
    const newStation = new Station({ name, location, platforms, exits });
    await newStation.save();
    res.status(201).json(newStation);
  } catch (error) {
    res.status(500).json({ message: "Error adding station" });
  }
};
