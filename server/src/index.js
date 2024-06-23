const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

const db=require("./config/db");

const router = require("./routes/router");

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the home page" });
});
// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api", router);
app.listen(port, () => {
    console.log(`\n\t Server is running on port ${port} \n`);
    console.log(`\n\t http://localhost:${port} \n`);
    db();
});
