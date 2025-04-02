require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database successfuly!");
  } catch (error) {
    console.error("Failed to connect to Database");
    process.exit(1);
  }
};

module.exports = connectDB;
