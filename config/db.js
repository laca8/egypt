const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ahmed:VernA2525@cluster0.2qrrr0b.mongodb.net/egypt?retryWrites=true&w=majority"
    );
    console.log("db connect....");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
