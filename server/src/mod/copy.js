const fs = require("fs");
const User = require("../models/User");
const mongoose = require("mongoose");

const MONGO_URI="mongodb://localhost:27017/Test";
// Function to connect to MongoDB
const connectToDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");
        await copyData();
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    } finally {
        mongoose.disconnect();
    }
};

// Function to copy data and save to backup.txt
const copyData = async () => {
    try {
        const users = await User.find();
        const dataToLog = JSON.stringify(users, null, 2);
        fs.writeFile("backup.txt", dataToLog, (err) => {
            if (err) {
                console.error("Failed to write backup:", err);
            } else {
                console.log("Backup saved to backup.txt");
            }
        });
    } catch (err) {
        console.error("Failed to fetch users:", err);
    }
};

// Call function to connect to DB and copy data
connectToDB();
