const User = require("../models/User");

const register = async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).send(user);
    } catch (e) {
        console.error("\n\t Error during registration:", e);
        res.status(400).send(e.message);
    }
}

module.exports = register;
