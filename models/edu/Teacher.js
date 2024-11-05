const mongoose = require("mongoose");
const teachers = new mongoose.Schema({
  المديرية: {
    type: String,
  },
  العام: {
    type: String,
  },
  المرحلة: {
    type: String,
  },
  اناث: {
    type: String,
  },
  ذكور: {
    type: String,
  },
  "اناث حكومى": {
    type: String,
  },
  "ذكور حكومى": {
    type: String,
  },
  "اناث خاص": {
    type: String,
  },
  "ذكور خاص": {
    type: String,
  },
  "اناث حضر": {
    type: String,
  },
  "ذكور حضر": {
    type: String,
  },
  "اناث ريف": {
    type: String,
  },
  "ذكور ريف": {
    type: String,
  },
});
module.exports = mongoose.model("allTeacher", teachers);
