import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendSMS = async (to, message) => {
    try {
        const response = await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: to
        });
        console.log("✅ SMS Sent Successfully:", response.sid);
        return response;
    } catch (error) {
        console.error("❌ Error Sending SMS:", error.message);
        throw error;
    }
};
