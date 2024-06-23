const User = require("../models/User");
const fs = require("fs");

const logData = async (req, res) => {
    try {
        const users = await User.find();
        const dataToLog = JSON.stringify(users, null, 2);

        console.log("\n\t Fetched users:", users); // Log fetched users

        fs.writeFile("log.json", dataToLog, (err) => {
            if (err) {
                console.error("\n\t Error writing file:", err); 
                res.status(500).send("Failed to write data to log file");
            } else {
                console.log("\n\t Data saved to log.json");
                res.status(200).json({
                    msg: "Data logged successfully",
                    data: users,
                    success: true 
                });
            }
        });
    } catch (e) {
        console.error("\n\t Error during logging:", e);
        res.status(500).send(e);
    }
}

module.exports = logData;
