const User = require("../models/User");

const signup = async (req, res) => {
    try {
        const user = new User({
            name: req.query.name,
            email: req.query.email,
            password: req.query.password
        });
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
}

module.exports = signup;
