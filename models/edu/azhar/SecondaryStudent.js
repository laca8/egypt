const mongoose = require("mongoose");
const SecondaryStudents = new mongoose.Schema({
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
  "عدد_الطلاب_المرحلة_الاعدادية",
  SecondaryStudents
);
