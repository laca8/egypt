const mongoose = require("mongoose");
const totalArea = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  السنة: {
    type: String,
  },
  "المساحة الكلية": {
    type: String,
  },
  "المساحة المأهولة": {
    type: String,
  },
});
module.exports = mongoose.model("المساحات", totalArea);
