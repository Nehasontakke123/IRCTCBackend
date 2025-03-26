// import express from "express";
// import { getAllStations, getStationByName, getARNavigationData, addStation } from "../controllers/arNavigationController.js";

// const arNavigationRoutes = express.Router();

// arNavigationRoutes.get("/", getAllStations); // ✅ Fetch all stations

// arNavigationRoutes.get("/:name/ar", getARNavigationData); // ✅ First AR Route
// arNavigationRoutes.get("/:name", getStationByName); // ✅ Then Normal Station Route


// arNavigationRoutes.post("/", addStation); // ✅ Add new station

// export default arNavigationRoutes;



import express from "express";
import { 
  getAllStations, 
  getStationByName, 
  getARNavigationData, 
  addStation 
} from "../controllers/arNavigationController.js";

const arNavigationRoutes = express.Router();

arNavigationRoutes.get("/", getAllStations); // ✅ Fetch all stations
arNavigationRoutes.get("/:name/ar", getARNavigationData); // ✅ AR Navigation Data
arNavigationRoutes.get("/:name", getStationByName); // ✅ Normal Station Data
arNavigationRoutes.post("/", addStation); // ✅ Add new station

export default arNavigationRoutes;
