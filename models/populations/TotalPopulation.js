const mongoose = require("mongoose");
const totalPopulationSchema = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  السنة: {
    type: String,
  },
  الشهر: {
    type: String,
  },
  النوع: {
    type: String,
  },
  العدد: {
    type: String,
  },
});
module.exports = mongoose.model("عدد_السكان", totalPopulationSchema);
