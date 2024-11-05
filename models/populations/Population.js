const mongoose = require("mongoose");
const populationSchema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "city required"],
  },
});
module.exports = mongoose.model("populationarea", populationSchema);
