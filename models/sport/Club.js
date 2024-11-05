const mongoose = require("mongoose");
const clubSchema = new mongoose.Schema({
  المحافظه: {
    type: String,
  },
  اتبعية: {
    type: String,
  },
  العدد: {
    type: String,
  },
});
module.exports = mongoose.model("club", clubSchema);
