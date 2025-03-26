import express from "express";
import { getTrains, searchTrains, addTrain } from "../controllers/trainController.js"; 

const trainRoutes = express.Router();

trainRoutes.get("/", getTrains); 
trainRoutes.post("/search", searchTrains); 
trainRoutes.post("/", addTrain); // ✅ Train Insert API

export default trainRoutes;
