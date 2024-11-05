const mongoose = require("mongoose");
const Institutes = new mongoose.Schema({
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
module.exports = mongoose.model("عدد_المعاهد_الازهر", Institutes);
