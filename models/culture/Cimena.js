const mongoose = require("mongoose");
const cinemaSchema = new mongoose.Schema({
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
module.exports = mongoose.model("عدد_السينمات", cinemaSchema);
