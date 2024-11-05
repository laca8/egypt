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
    type: String,
  },
});
module.exports = mongoose.model("وفيات_الاطفال_الرضع_اقل_من_سنة", kidsSchema);
