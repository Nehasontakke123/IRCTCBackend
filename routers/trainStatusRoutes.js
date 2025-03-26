// import express from "express";
// import axios from "axios";
// import * as cheerio from "cheerio";



// const router = express.Router();

// // Route - Live Train Status
// router.get("/:trainNumber", async (req, res) => {
//     try {
//         const { trainNumber } = req.params;
//         const url = `https://enquiry.indianrail.gov.in/mntes/`;

//         // Indian Railways Website वरून Scrape करतो
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);

//         let trainStatus = {};

//         // Example: Website च्या स्ट्रक्चरप्रमाणे Selector Update करावा लागेल!
//         trainStatus.trainNumber = trainNumber;
//         trainStatus.status = $("#trainStatus").text().trim(); // Selector बदलावा लागू शकतो!

//         res.json(trainStatus);
//     } catch (error) {
//         console.error("Error fetching train status:", error);
//         res.status(500).json({ error: "Failed to fetch train status" });
//     }
// });

// export default router;

import express from "express";
import * as cheerio from "cheerio";
import axios from "axios";

export const getTrainStatus = async (req, res) => {
  try {
    const trainNumber = req.params.trainNumber;
    const url = `https://enquiry.indianrail.gov.in/mntes/`;
    
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    console.log($("body").html()); // ✅ HTML Scrape होत आहे का Check कर

    const status = $(".status-class").text().trim(); // ✅ Correct Selector टाक
    res.json({ trainNumber, status });
  } catch (error) {
    console.error("❌ Error Fetching Train Status:", error);
    res.status(500).json({ error: "Failed to fetch train status" });
  }
};
export default getTrainStatus 