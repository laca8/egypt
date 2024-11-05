const mongoose = require("mongoose");
const TotalAges = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  "القسم أو المركز": {
    type: String,
  },
  "محل الإقامة": {
    type: String,
  },
  "فئات عمرية": {
    type: String,
  },
  الشهر: {
    type: String,
  },
  النوع: {
    type: String,
  },
  "عدد السكان": {
    type: String,
  },
});
module.exports = mongoose.model("الفئات_العمرية", TotalAges);
