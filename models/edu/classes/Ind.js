const mongoose = require("mongoose");
const indClasses = new mongoose.Schema({
  المديرية: {
    type: String,
  },
  السنة: {
    type: String,
  },
  "تبعية المدرسة": {
    type: String,
  },
  "محل الإقامة": {
    type: String,
  },
  العدد: {
    type: String,
  },
});
module.exports = mongoose.model("عدد_فصول_الثانوي_الصناعي", indClasses);
