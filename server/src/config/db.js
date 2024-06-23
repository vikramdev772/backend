const mongoose = require("mongoose");
require("dotenv").config();

const db=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`\n\t Mongodb is connected ..!`);
    })
    .catch((e) => {
        console.log(`\n\t Failed to connect db `, e);
    });
}

module.exports=db;
