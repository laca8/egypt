const mongoose = require("mongoose");
const momSchema = new mongoose.Schema({
  المحافظة: {
    type: String,
  },

  السنة: {
    type: String,
  },

  العدد: {
    type: String,
  },
});
module.exports = mongoose.model("وفيات_الامهات_طبقا_لمكان_الوفاة", momSchema);
