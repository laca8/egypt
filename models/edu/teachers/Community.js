const mongoose = require("mongoose");
const Teachers = new mongoose.Schema({
  المديرية: {
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
module.exports = mongoose.model("عدد_المدرسين_المجتمعي", Teachers);
