const User = require("../../models/User");
const fs = require("fs");

const logData = async (req, res) => {
    try {
        const users = await User.find();
        const newData = users;

        // Read the existing log file
        fs.readFile("log.json", "utf8", (err, data) => {
            if (err && err.code !== 'ENOENT') {
                console.error("Error reading file:", err);
                res.status(500).send("Failed to read existing log file");
                return;
            }

            let existingData = [];
            if (data) {
                try {
                    existingData = JSON.parse(data);
                } catch (parseError) {
                    console.error("Error parsing existing log data:", parseError);
                    res.status(500).send("Failed to parse existing log data");
                    return;
                }
            }

            // Append new data to existing data
            const updatedData = existingData.concat(newData);

            // Write the updated data back to the log file
            fs.writeFile("log.json", JSON.stringify(updatedData, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error("Error writing file:", writeErr);
                    res.status(500).send("Failed to write data to log file");
                } else {
                    console.log("Data appended to log.json");
                    res.status(200).json({
                        msg: "Data logged successfully",
                        data: newData,
                        success: true
                    });
                }
            });
        });
    } catch (e) {
        console.error("Error during logging:", e);
        res.status(500).send(e);
    }
}

module.exports = logData;
