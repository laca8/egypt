const mongoose = require("mongoose");
const kidsSchema = new mongoose.Schema({
  city: {
    type: String,
  },
});
module.exports = mongoose.model("kids_rate_death", kidsSchema);
