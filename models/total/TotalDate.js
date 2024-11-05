const mongoose = require("mongoose");
const totalDate = new mongoose.Schema({
  date: {
    type: String,
  },
  total: {
    type: Number,
  },
});
module.exports = mongoose.model("totalDate", totalDate);
