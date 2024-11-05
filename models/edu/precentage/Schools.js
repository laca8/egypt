const mongoose = require("mongoose");
const Schools = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "city required"],
  },
});
module.exports = mongoose.model("aveschooledu", Schools);
