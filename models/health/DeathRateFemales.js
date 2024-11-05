const mongoose = require("mongoose");
const femaleSchema = new mongoose.Schema({
  city: {
    type: String,
  },
});
module.exports = mongoose.model("female_rate_death", femaleSchema);
