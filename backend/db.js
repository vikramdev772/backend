const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db = async () => {
    try{
    const database=await mongoose.connect(process.env.MONGO_URI);
    console.log("\n\t Database connected  🔥🔥 \n");
    }
    catch (error) {
        console.error("\n\t Error connecting to database: ", error.message);
    }

}

module.exports =  db();
