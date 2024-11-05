const mongoose = require("mongoose");
const communityClasses = new mongoose.Schema({
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
  "عدد_الفصول_التعليم_المجتمعي",
  communityClasses
);
