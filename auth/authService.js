import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import User from "../models/User.js";
import usersModel from "../models/usersModel.js";

export const registerUser = async (name, email, password) => {
    const existingUser = await usersModel.findOne({ email }); // ✅ Correct Model
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new usersModel({ name, email, password: hashedPassword }); // ✅ Correct Model
    await newUser.save();
    return { message: "User registered successfully" };
};


export const loginUser = async (email, password) => {
    const user = await usersModel.findOne({ email }); // ✅ Correct Model
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.PRIVATEKEY, { expiresIn: "1h" });
    return { token, user };
};
