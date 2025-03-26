// import mongoose from "mongoose";

// const stationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   location: {
//     lat: { type: Number, required: true },
//     lon: { type: Number, required: true }
//   },
//   platforms: [
//     {
//       number: { type: Number, required: true },
//       location: { lat: Number, lon: Number }
//     }
//   ],
//   exits: [
//     {
//       name: { type: String, required: true },
//       location: { lat: Number, lon: Number }
//     }
//   ],
//   facilities: [
//     {
//       name: { type: String, required: true },
//       type: { type: String, required: true },
//       location: { lat: Number, lon: Number }
//     }
//   ]
// });

// const Station = mongoose.model("Station", stationSchema);
// export default Station;





import mongoose from "mongoose";

const stationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true }
  },
  platforms: [
    {
      number: { type: Number, required: true },
      location: { 
        lat: { type: Number, required: true }, 
        lon: { type: Number, required: true } 
      }
    }
  ],
  exits: [
    {
      name: { type: String, required: true },
      location: { 
        lat: { type: Number, required: true }, 
        lon: { type: Number, required: true } 
      }
    }
  ],
  facilities: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true },
      location: { 
        lat: { type: Number, required: true }, 
        lon: { type: Number, required: true } 
      }
    }
  ]
});

const Station = mongoose.model("Station", stationSchema);
export default Station;
