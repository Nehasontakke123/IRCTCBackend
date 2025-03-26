// database/dbConnect.js
import mongoose from "mongoose";

const dbConnect = async (DBURL, DBNAME) => {
    try {
        await mongoose.connect(`${DBURL}${DBNAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB Connected Successfully to ${DBNAME}`);
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

export default dbConnect;
