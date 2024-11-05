const mongoose = require("mongoose");
const Classes = new mongoose.Schema({
  المنطقة: {
    type: String,
  },
  العام: {
    type: String,
  },
  المرحلة: {
    type: String,
  },
  "محل الاقامة": {
    type: String,
  },
  العدد: {
    type: String,
  },
});
module.exports = mongoose.model("عدد_فصول_الازهر", Classes);
