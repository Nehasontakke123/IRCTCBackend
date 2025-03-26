import express from "express";
import { predictFareController, saveFareController } from "../controllers/fareController.js";

const fareRoutes = express.Router();

fareRoutes.get("/predict", predictFareController);
fareRoutes.post("/save", saveFareController);

export default fareRoutes;