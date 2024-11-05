const mongoose = require("mongoose");
const secondaryClasses = new mongoose.Schema({
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
module.exports = mongoose.model(
  "عدد_الفصول_المرحلة_الاعدادية",
  secondaryClasses
);
