const mongoose = require("mongoose");
const indSchool = new mongoose.Schema({
  المديرية: {
    type: String,
  },
  السنة: {
    type: String,
  },
  "تبعية المدارس": {
    type: String,
  },
  "محل الاقامة": {
    type: String,
  },
  العدد: {
    type: String,
  },
});
module.exports = mongoose.model("عدد_المدارس_الثانوي_الصناعي", indSchool);
