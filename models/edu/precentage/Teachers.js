const mongoose = require("mongoose");
const Teachers = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "city required"],
  },
});
module.exports = mongoose.model("aveteacheredu", Teachers);
