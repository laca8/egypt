const mongoose = require("mongoose");
const physicalPunishment = new mongoose.Schema({
  Indicator: {
    type: String,
  },
  Sex: {
    type: String,
  },
  TIME_PERIOD: {
    type: String,
  },
  VALUE: {
    type: String,
  },
  "Observation Status": {
    type: String,
  },
  DATA_SOURCE: {
    type: String,
  },
});
module.exports = mongoose.model("physicalPunishment", physicalPunishment);
