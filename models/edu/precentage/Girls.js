const mongoose = require("mongoose");
const Girls = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "city required"],
  },
});
module.exports = mongoose.model("avegirledu", Girls);
