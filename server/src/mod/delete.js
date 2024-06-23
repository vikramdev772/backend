const mongoose = require("mongoose");
const User = require("../models/User");
require("dotenv").config();
// Function to connect to MongoDB

const MONGO_URI="mongodb://localhost:27017/Test";
const connectToDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
        await deleteData();
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    } finally {
        mongoose.disconnect();
    }
};

// Function to delete all data from User collection
const deleteData = async () => {
    try {
        await User.deleteMany();
        console.log("All data deleted from User collection");
    } catch (err) {
        console.error("Failed to delete data:", err);
    }
};

// Call function to connect to DB and delete data
connectToDB();
