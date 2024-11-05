const mongoose = require("mongoose");
const Classes = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "city required"],
  },
});
module.exports = mongoose.model("aveclassedu", Classes);
