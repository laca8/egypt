const mongoose = require("mongoose");
const kidsSchema = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  "محل الإقامة": {
    type: String,
  },

  السنة: {
    type: String,
  },
  النوع: {
    type: String,
  },
  العدد: {
    type: Number,
  },
});
module.exports = mongoose.model("وفيات_الاطفال_من_سنة_ل5سنوات", kidsSchema);
