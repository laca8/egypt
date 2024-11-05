const mongoose = require("mongoose");
const HighStudents = new mongoose.Schema({
  المنطقة: {
    type: String,
  },
  العام: {
    type: String,
  },
  النوع: {
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
module.exports = mongoose.model(
  "عدد_الطلاب_الازهر_المرحلة_الثانوية",
  HighStudents
);
