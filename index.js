// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import dbConnect from "./db/dbConnect.js";

// // Import Routes
// import authRoutes from "./routers/authRoutes.js";
// import offlineBookingRoutes from "./routers/offlineBookingRoutes.js";
// import emergencyHelpRoutes from "./routers/emergencyHelpRoutes.js";
// import ticketRoutes from "./routers/ticketRoutes.js";
// import fareRoutes from "./routers/fareRoutes.js"; // ✅ Added Fare Routes
// import arNavigationRoutes from "./routers/arNavigationRoutes.js"
// import trainRoutes from "./routers/trainRoutes.js"
// import bookingRoutes from "./routers/bookingRoutes.js"

// // Load environment variables
// dotenv.config();

// // Initialize Express App
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// dbConnect(process.env.DBURL, process.env.DBNAME)
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/offline-booking", offlineBookingRoutes);
// app.use("/emergency-help", emergencyHelpRoutes);
// app.use("/api/tickets", ticketRoutes);
// app.use("/api/fare", fareRoutes); // ✅ Fare Routes Added
// app.use("/api/stations", arNavigationRoutes);
// app.use("/api/trains", trainRoutes);
// app.use("/api/bookings", bookingRoutes);

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });




import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./db/dbConnect.js";


// Import Routes
import authRoutes from "./routers/authRoutes.js";
import offlineBookingRoutes from "./routers/offlineBookingRoutes.js";
import emergencyHelpRoutes from "./routers/emergencyHelpRoutes.js";
import ticketRoutes from "./routers/ticketRoutes.js";
import fareRoutes from "./routers/fareRoutes.js"; 
import arNavigationRoutes from "./routers/arNavigationRoutes.js";
import trainRoutes from "./routers/trainRoutes.js";
import bookingRoutes from "./routers/bookingRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

dbConnect(process.env.DBURL, process.env.DBNAME)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/offline-booking", offlineBookingRoutes);
app.use("/emergency-help", emergencyHelpRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/fare", fareRoutes); 
app.use("/api/stations", arNavigationRoutes);
app.use("/api/trains", trainRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



