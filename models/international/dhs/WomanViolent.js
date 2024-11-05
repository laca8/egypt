const mongoose = require("mongoose");
const womanViolent = new mongoose.Schema({
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
module.exports = mongoose.model("womanViolent", womanViolent);
