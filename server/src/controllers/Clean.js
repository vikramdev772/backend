const User = require("../models/User");

const cleanDatabase = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({
      msg: "All documents deleted successfully",
      success: true,
    });
    console.log("All documents deleted successfully");
  } catch (e) {
    res.status(500).send(e);
    console.error("Failed to delete documents:", e);
  }
};

module.exports = cleanDatabase;
