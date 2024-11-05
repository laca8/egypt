const mongoose = require("mongoose");
const familySchema = new mongoose.Schema({
  city: {
    type: String,
  },
  head_family: {
    type: String,
  },

  total_family: {
    type: Number,
  },
});
module.exports = mongoose.model("family", familySchema);
