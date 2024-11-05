const mongoose = require("mongoose");
const economic = new mongoose.Schema({
  Indicator: {
    type: String,
  },
  Sex: {
    type: String,
  },
  TIME_PERIOD: {
    type: String,
  },
  OBS_VALUE: {
    type: String,
  },
  "Unit multiplier": {
    type: String,
  },
  "Unit of measure": {
    type: String,
  },
  "Observation Status": {
    type: String,
  },
  "Observation confidentaility": {
    type: String,
  },
  LOWER_BOUND: {
    type: String,
  },
  UPPER_BOUND: {
    type: String,
  },
  WGTD_SAMPL_SIZE: {
    type: String,
  },
  DATA_SOURCE: {
    type: String,
  },
  "Current age": {
    type: String,
  },
  "Time period activity related to when the data are collected": {
    type: String,
  },

  COVERAGE_TIME: {
    type: String,
  },
});
module.exports = mongoose.model("economic_unicef", economic);
