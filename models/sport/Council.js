const mongoose = require("mongoose");
const councilSchema = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  الصالات: {
    type: String,
  },
  النوع: {
    type: String,
  },
  العدد: {
    type: String,
  },
});
module.exports = mongoose.model("council", councilSchema);
