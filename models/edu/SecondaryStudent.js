const mongoose = require("mongoose");
const SecondaryStudent = new mongoose.Schema({
  المديرية: {
    type: String,
  },
  النوع: {
    type: String,
  },
  "تبعية المدرسة": {
    type: String,
  },
  السنة: {
    type: String,
  },
  العدد: {
    type: String,
  },
  "محل الإقامة": {
    type: String,
  },
});
module.exports = mongoose.model("عدد_الطلاب_اعدادي", SecondaryStudent);
