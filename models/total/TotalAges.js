const mongoose = require("mongoose");
const totalAges = new mongoose.Schema({
  city: {
    type: String,
  },
});
module.exports = mongoose.model("totalAge", totalAges);
