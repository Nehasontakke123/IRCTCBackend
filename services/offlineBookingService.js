import OfflineBooking from "../models/offlineBookingModel.js";

export const saveOfflineBooking = async (data) => {
    try {
        const newBooking = new OfflineBooking(data);
        console.log("Saving Booking:", newBooking);
        await newBooking.save();
        return { message: "Offline booking saved successfully", booking: newBooking };
    } catch (error) {
        console.error("Error Saving Booking:", error.message);
        throw new Error(error.message);
    }
};

export const processOfflineBookings = async (bookings) => {
    try {
        if (!Array.isArray(bookings)) {
            throw new Error("Invalid data format. Expected an array of bookings.");
        }
        
        console.log("Received bookings for sync:", bookings);

        // Synced bookings मध्ये status update करून save करतोय
        const updatedBookings = bookings.map((booking) => ({
            ...booking,
            status: "synced"
        }));

        const savedBookings = await OfflineBooking.insertMany(updatedBookings);
        
        console.log("Saved Synced Bookings:", savedBookings);

        return { message: "Offline bookings synced successfully", syncedBookings: savedBookings };
    } catch (error) {
        console.error("Error Syncing Bookings:", error.message);
        throw new Error(error.message);
    }
};

export const fetchOfflineBookings = async () => {
    try {
        const bookings = await OfflineBooking.find();
        console.log("Fetched Bookings:", bookings);
        return bookings;
    } catch (error) {
        console.error("Error Fetching Bookings:", error.message);
        throw new Error(error.message);
    }
};
