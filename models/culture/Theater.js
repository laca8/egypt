const mongoose = require("mongoose");
const theaterSchema = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  العام: {
    type: String,
  },
  العدد: {
    type: String,
  },
});
module.exports = mongoose.model("عدد_المسارح", theaterSchema);
