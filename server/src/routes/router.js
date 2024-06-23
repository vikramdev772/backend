const express = require("express");
const router = express.Router();
const signup = require("../controllers/Signup");
const logData = require("../controllers/Log");
const cleanDatabase = require("../controllers/Clean");
const register = require("../controllers/Register");

router.get("/clean", cleanDatabase);  //curl -X GET "http://localhost:4000/api/clean"

router.get("/log", logData);
router.get("/signup", signup);  //curl -X GET "http://localhost:4000/api/signup?name=JohnDoe&email=johndoe@example.com&password=12345"

router.post("/register", register);   //curl -X POST "http://localhost:4000/api/register" -H "Content-Type: application/json" -d "{\"name\":\"Mark\",\"email\":\"mark@gmail.com\",\"password\":\"jdb3rj4@@#@$\"}"

module.exports = router;
